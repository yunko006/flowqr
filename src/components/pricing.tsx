import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Gratuit",
    price: "0€",
    period: "/mois",
    description: "Parfait pour commencer",
    icon: Star,
    features: [
      "Jusqu'à 5 projets",
      "1 Go de stockage",
      "Support par email",
      "Tableau de bord basique",
      "Exports PDF",
    ],
    buttonText: "Commencer gratuitement",
    buttonVariant: "outline" as const,
    popular: false,
    productId: null, // Pas de paiement pour le plan gratuit
  },
  {
    name: "Essentiel",
    price: "2€",
    period: "/mois",
    description: "Pour les petites équipes",
    icon: Zap,
    features: [
      "Projets illimités",
      "10 Go de stockage",
      "Support prioritaire",
      "Analytics avancées",
      "Intégrations API",
      "Collaboration équipe",
      "Exports personnalisés",
    ],
    buttonText: "Choisir Essentiel",
    buttonVariant: "default" as const,
    popular: true,
    productId: "6207ff04-fe15-4c76-9313-f440d72bf7ee", // Remplacez par votre vrai ID Polar
  },
  {
    name: "Pro",
    price: "10€",
    period: "/mois",
    description: "Pour les équipes qui grandissent",
    icon: Crown,
    features: [
      "Tout d'Essentiel",
      "100 Go de stockage",
      "Support téléphonique 24/7",
      "IA et automatisation",
      "White-label",
      "SSO et sécurité avancée",
      "Rapports personnalisés",
      "Gestionnaire de compte dédié",
    ],
    buttonText: "Choisir Pro",
    buttonVariant: "secondary" as const,
    popular: false,
    productId: "VOTRE_PRODUCT_ID_PRO", // Remplacez par votre ID Polar pour le plan Pro
  },
];

export function PricingSection() {
  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Midnight Aurora Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
          radial-gradient(circle at 50% 50%, 
            rgba(58, 123, 255, 0.25) 0%, 
            rgba(100, 149, 237, 0.15) 25%, 
            rgba(123, 104, 238, 0.07) 35%, 
            transparent 50%
          )
        `,
        }}
      />
      {/* Your Content/Components */}

      <section className="min-h-screen bg-background grid-pattern py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground text-balance mb-4">
              Choisissez le plan parfait
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Des tarifs transparents qui s'adaptent à vos besoins.
              <span className="text-foreground font-medium">
                {" "}
                Commencez gratuitement
              </span>{" "}
              et évoluez à votre rythme.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`relative transition-all duration-300 hover:scale-105 ${
                    plan.popular ? "scale-105" : ""
                  }`}
                >
                  <Card
                    className={`bg-card border-border dotted-border h-full flex flex-col ${
                      plan.popular
                        ? "shadow-2xl shadow-primary/20 ring-2 ring-primary/30"
                        : ""
                    }`}
                  >
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-medium px-4 py-1 text-sm">
                        ⭐ Le plus populaire
                      </Badge>
                    )}

                    <CardHeader className="text-center pb-8 flex-shrink-0">
                      <div
                        className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                          plan.popular
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <IconComponent className="w-8 h-8" />
                      </div>

                      <CardTitle className="text-2xl font-bold text-card-foreground mb-2">
                        {plan.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-base mb-4">
                        {plan.description}
                      </CardDescription>

                      <div className="mt-4">
                        <span className="text-5xl font-bold text-card-foreground">
                          {plan.price}
                        </span>
                        <span className="text-muted-foreground text-lg">
                          {plan.period}
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4 flex-grow">
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-3"
                          >
                            <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm leading-relaxed text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>

                    <CardFooter className="pt-6 flex-shrink-0">
                      {plan.productId ? (
                        // Plans payants - lien vers Polar checkout
                        <a
                          href={`/api/checkout?products=${plan.productId}`}
                          className="w-full"
                        >
                          <Button
                            variant={plan.popular ? "default" : "outline"}
                            className={`w-full text-base py-6 font-semibold ${
                              plan.popular
                                ? "bg-white text-black hover:bg-gray-100 shadow-lg"
                                : "border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                            }`}
                            size="lg"
                          >
                            {plan.buttonText}
                          </Button>
                        </a>
                      ) : (
                        // Plan gratuit - pas de paiement
                        <Button
                          variant={plan.popular ? "default" : "outline"}
                          className={`w-full text-base py-6 font-semibold ${
                            plan.popular
                              ? "bg-white text-black hover:bg-gray-100 shadow-lg"
                              : "border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                          }`}
                          size="lg"
                          onClick={() => {
                            // Redirigez vers votre page d'inscription ou dashboard
                            window.location.href = "/signup";
                          }}
                        >
                          {plan.buttonText}
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Besoin d'une solution sur mesure ?
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-accent/10 bg-transparent"
            >
              Contactez notre équipe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
