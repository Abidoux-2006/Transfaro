import { COOKIE_NAME } from "../shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),

    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, {
        ...cookieOptions,
        maxAge: -1,
      });

      return {
        success: true,
      } as const;
    }),
  }),

  // ✅ FIX: quote router is defined directly here (NOT called like a function)
  quote: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string(),
          email: z.string(),

          phone: z.string().optional(),
          company: z.string().optional(),
          website: z.string().optional(),

          shipmentType: z.string().optional(),
          cargoType: z.string().optional(),
          containerType: z.string().optional(),

          commodity: z.string().optional(),
          portLoading: z.string().optional(),
          portDischarge: z.string().optional(),
          placeDelivery: z.string().optional(),

          numContainers: z.string().optional(),
          containerSize: z.string().optional(),

          numPackages: z.string().optional(),
          weight: z.string().optional(),
          volume: z.string().optional(),

          message: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        console.log("🔥 QUOTE ROUTE HIT");

        try {
          await notifyOwner({
            name: input.name,
            email: input.email,
            message: input.message ?? "",

            phone: input.phone,
            company: input.company,
            website: input.website,

            shipmentType: input.shipmentType,
            cargoType: input.cargoType,
            containerType: input.containerType,

            commodity: input.commodity,
            portLoading: input.portLoading,
            portDischarge: input.portDischarge,
            placeDelivery: input.placeDelivery,

            numContainers: input.numContainers,
            containerSize: input.containerSize,

            numPackages: input.numPackages,
            weight: input.weight,
            volume: input.volume,

            remarks: input.message, // optional reuse
          });

          return {
            success: true,
            message: "Quote request submitted successfully",
          };
        } catch (error) {
          console.error("❌ REAL ERROR:", error);
          throw error;
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;