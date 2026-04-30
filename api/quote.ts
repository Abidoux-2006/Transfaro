import type { VercelRequest, VercelResponse } from "@vercel/node";
import { notifyOwner } from "../server/_core/notification";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // data coming from frontend
    const data = req.body;

    await notifyOwner(data);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
}