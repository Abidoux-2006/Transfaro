import sgMail from "@sendgrid/mail";
import { ENV } from "./env";

sgMail.setApiKey(ENV.sendgridApiKey);

type QuoteData = {
  name: string;
  email: string;
  message: string;

  phone?: string;
  company?: string;
  website?: string;

  shipmentType?: string;
  cargoType?: string;
  containerType?: string;

  commodity?: string;
  portLoading?: string;
  portDischarge?: string;
  placeDelivery?: string;

  numContainers?: string;
  containerSize?: string;

  numPackages?: string;
  weight?: string;
  volume?: string;

  remarks?: string;
};

export const notifyOwner = async (data: QuoteData) => {
  try {
    await sgMail.send({
      to: "info@transfaro.com",
      from: "info@transfaro.com",
      replyTo: data.email,
      subject: `🚚 New Quote Request - ${data.name || "Unknown"}`,

      text: `
    ==============================
    ==============================
    🚚 NEW QUOTE REQUEST
    ==============================
    ==============================

    ==============================
    👤 CLIENT INFORMATION
    ==============================
    Name: ${data.name || "-"}
    Email: ${data.email || "-"}
    Phone: ${data.phone || "-"}
    Company: ${data.company || "-"}
    Website: ${data.website || "-"}

    ==============================
    📦 SHIPMENT DETAILS
    ==============================
    Shipment Type: ${data.shipmentType || "-"}
    Cargo Type: ${data.cargoType || "-"}
    Container Type: ${data.containerType || "-"}

    Commodity: ${data.commodity || "-"}

    ==============================
    📍 ROUTE
    ==============================
    Port of Loading: ${data.portLoading || "-"}
    Port of Discharge: ${data.portDischarge || "-"}
    Final Delivery: ${data.placeDelivery || "-"}

    ==============================
    📊 CARGO SPECS
    ==============================
    Number of Containers: ${data.numContainers || "-"}
    Container Size: ${data.containerSize || "-"}

    Number of Packages: ${data.numPackages || "-"}
    Weight: ${data.weight || "-"} KG
    Volume: ${data.volume || "-"} CBM

    ==============================
    💬 MESSAGE
    ==============================
    ${data.message || "No message provided"}

    ==============================
    Transfaro Logistics © 2026
    ==============================
      `,
    });

    console.log("✅ EMAIL SENT");
  } catch (error: any) {
    console.error("❌ SENDGRID FULL ERROR:");
    console.error(error.response?.body || error);

    throw error;
  }
};