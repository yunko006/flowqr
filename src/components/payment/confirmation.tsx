import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PaymentConfirmationProps {
  planName?: string;
  planPrice?: string;
  userEmail?: string;
}

export function PaymentConfirmation({
  planName = "Premium",
  planPrice = "29€/mois",
  userEmail,
}: PaymentConfirmationProps) {
  return (
    <div className="min-h-screen bg-background grid-pattern flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Success Card */}
        <div className="dotted-border bg-card/50 backdrop-blur-sm p-8 text-center space-y-6">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl">
                ✓
              </div>
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs absolute -top-1 -right-1 animate-pulse">
                ✨
              </div>
            </div>
          </div>

          {/* Success Message */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground">
              Paiement confirmé !
            </h1>
            <p className="text-muted-foreground">
              Votre abonnement a été activé avec succès. Vous pouvez maintenant
              accéder à toutes les fonctionnalités.
            </p>
          </div>

          {/* Plan Details */}
          {(planName || planPrice) && (
            <div className="bg-muted/20 rounded-lg p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">
                  Plan
                </span>
                <span className="text-sm text-muted-foreground">
                  {planName}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">
                  Prix
                </span>
                <span className="text-sm text-muted-foreground">
                  {planPrice}
                </span>
              </div>
            </div>
          )}

          {/* Email Confirmation Notice */}
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              📧 Un email de confirmation {userEmail && `à ${userEmail}`} sera
              envoyé très bientôt.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link
                href="/dashboard"
                className="flex items-center justify-center gap-2"
              >
                Accéder au Dashboard
                <span>→</span>
              </Link>
            </Button>

            <Button variant="outline" asChild className="w-full bg-transparent">
              <Link href="/">Retour à l'accueil</Link>
            </Button>
          </div>

          {/* Additional Info */}
          <div className="text-xs text-muted-foreground space-y-1">
            <p>Vous recevrez un reçu détaillé par email.</p>
            <p>
              Besoin d'aide ?{" "}
              <Link href="/support" className="text-primary hover:underline">
                Contactez le support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
