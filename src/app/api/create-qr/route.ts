import { Polar } from "@polar-sh/sdk";
import { NextResponse } from "next/server";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
  server: "sandbox",
});

export const GET = async (req: Request, res: Response) => {
  const results = await polar.events.ingest({
    events: [
      {
        name: "create-qr",
        // Replace with your logic to get the customer id
        externalCustomerId: "3kdIYnW0yWZpU5bWzkzemZWUW2jFUYNi",
        metadata: {
          route: "/api/create-qr",
          method: "GET",
        },
      },
    ],
  });

  return NextResponse.json(results);
};
