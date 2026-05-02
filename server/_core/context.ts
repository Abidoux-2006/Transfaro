import { sdk } from "../../server/_core/sdk"
import type { User } from "../../server/_core/types/user"

export type ContextInput = {
  req: Request
  res?: unknown
}

export async function createContext(opts: ContextInput) {
  let user: User | null = null

  try {
    // ONLY pass headers, nothing else
    const token = opts.req.headers.get("authorization")

    user = await sdk.authenticateRequest({
      headers: {
        authorization: token ?? "",
      },
    } as any)
  } catch {
    user = null
  }

  return {
    req: opts.req,
    user,
  }
}