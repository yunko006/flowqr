import { NextRequest, NextResponse } from "next/server";
import {
  validateEvent,
  WebhookVerificationError,
} from "@polar-sh/sdk/webhooks";

export async function POST(req: NextRequest) {
  try {
    // Récupérer le body brut en tant que string
    const body = await req.text();

    // Convertir les headers Next.js en objet simple
    const headers: Record<string, string> = {};
    req.headers.forEach((value, key) => {
      headers[key] = value;
    });

    // Valider l'événement webhook
    const event = validateEvent(
      body,
      headers,
      process.env.POLAR_WEBHOOK_SECRET ?? ""
    );

    // Traiter l'événement ici
    console.log("Event reçu:", event);

    return new NextResponse("", { status: 202 });
  } catch (error) {
    if (error instanceof WebhookVerificationError) {
      return new NextResponse("", { status: 403 });
    }

    console.error("Erreur webhook:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
