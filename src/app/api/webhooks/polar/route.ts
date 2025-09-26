// app/api/webhooks/polar/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Récupérer le body en JSON
    const event = await request.json();

    // Log simple pour voir que ça marche
    console.log("🎯 Webhook Polar reçu!", {
      type: event.type,
      id: event.id || "no-id",
      timestamp: new Date().toISOString(),
    });

    // Afficher les données reçues
    console.log("📦 Données:", JSON.stringify(event, null, 2));

    // Réponse simple
    return NextResponse.json(
      {
        message: "Webhook reçu avec succès!",
        eventType: event.type,
        received: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Erreur webhook:", error);

    return NextResponse.json(
      { error: "Erreur lors du traitement" },
      { status: 500 }
    );
  }
}

// Route GET pour tester que l'endpoint existe
export async function GET() {
  return NextResponse.json({
    message: "Endpoint webhook Polar actif ✅",
    timestamp: new Date().toISOString(),
  });
}
