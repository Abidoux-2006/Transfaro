import { z } from "zod";
import { notifyOwner } from "./notification";
import { adminProcedure, publicProcedure, router } from "./trpc";

export const systemRouter = router({
  health: publicProcedure
    .input(
      z.object({
        timestamp: z.number().min(0),
      })
    )
    .query(() => ({
      ok: true,
    })),

  notifyOwner: adminProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        message: z.string(),

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

        remarks: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      console.log("BACKEND RECEIVED:", input);
      notifyOwner(input).catch(err => {
      console.error("EMAIL FAILED:", err);
    });

      return {
        success: true,
        message: "Quote submitted successfully",
      };
    }),
});