import { Suspense } from "react";
import { PaymentConfirmation } from "@/components/payment/confirmation";
import { Skeleton } from "@/components/ui/skeleton";

// 📌 Configuration du plan par défaut
const DEFAULT_PLAN = {
  name: "Plan Starter",
  price: "2€/mois",
} as const;

// Composant pour gérer les searchParams (maintenant async)
async function ConfirmationContent({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string; price?: string; email?: string }>; // ✅ Promise
}) {
  const params = await searchParams; // ✅ Await les searchParams

  return (
    <PaymentConfirmation
      planName={params.plan ?? DEFAULT_PLAN.name}
      planPrice={params.price ?? DEFAULT_PLAN.price}
      userEmail={params.email}
    />
  );
}

export default function ConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string; price?: string; email?: string }>; // ✅ Promise
}) {
  return (
    <Suspense fallback={<ConfirmationSkeleton />}>
      <ConfirmationContent searchParams={searchParams} />
    </Suspense>
  );
}

function ConfirmationSkeleton() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-4">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
    </div>
  );
}
