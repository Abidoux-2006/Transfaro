import { NOT_ADMIN_ERR_MSG, UNAUTHED_ERR_MSG } from '@shared/const';
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import type { TrpcContext } from "./context";
import { sendQuoteEmail } from "../_core/email";
import { z } from "zod";
import { ENV } from './env';

const t = initTRPC.context<TrpcContext>().create({
  transformer: superjson,
});

export const router = t.router;
export const publicProcedure = t.procedure;

const requireUser = t.middleware(async opts => {
  const { ctx, next } = opts;

  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: UNAUTHED_ERR_MSG });
  }

  return next({
    ctx: {
      ...ctx,
      user: ctx.user,
    },
  });
});

export const protectedProcedure = t.procedure.use(requireUser);

export const adminProcedure = t.procedure.use(
  t.middleware(async opts => {
    const { ctx, next } = opts;

    if (!ctx.user || ctx.user.role !== 'admin') {
      throw new TRPCError({ code: "FORBIDDEN", message: NOT_ADMIN_ERR_MSG });
    }

    return next({
      ctx: {
        ...ctx,
        user: ctx.user,
      },
    });
  }),
);

export const quoteRouter = router({
  submit: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        message: z.string(),
      })
    )

    .mutation(async ({ input }) => {
      console.log("🔥 QUOTE INPUT:", input);
      console.log("🔥 EMAIL FROM:", ENV.emailFrom);
      console.log("🔥 SENDGRID KEY:", ENV.sendgridApiKey ? "OK" : "MISSING");

  const title = `New Quote Request from ${input.name}`;
      await sendQuoteEmail(input);

      return {
        success: true,
        message: "Quote sent successfully",
      };
    }),
});
