import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the notifyOwner function
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("quote.submit", () => {
  it("should successfully submit a quote request with valid data", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.quote.submit({
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      message: "I need to ship 10 containers to France next month.",
    });

    expect(result).toEqual({
      success: true,
      message: "Quote request submitted successfully",
    });
  });

  it("should reject quote with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.quote.submit({
        name: "John Doe",
        email: "invalid-email",
        phone: "1234567890",
        message: "I need to ship cargo.",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Invalid email address");
    }
  });

  it("should reject quote with short name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.quote.submit({
        name: "J",
        email: "john@example.com",
        phone: "1234567890",
        message: "I need to ship cargo.",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Name must be at least 2 characters");
    }
  });

  it("should reject quote with short subject", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.quote.submit({
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
        message: "I need to ship cargo.",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Subject must be at least 5 characters");
    }
  });

  it("should reject quote with short message", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.quote.submit({
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
        message: "Ship it",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Message must be at least 10 characters");
    }
  });
});
