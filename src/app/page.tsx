import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  QrCode,
  Zap,
  BarChart3,
  ArrowRight,
  Bot,
  Play,
  CheckCircle,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Vercel Grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden z-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-lg rotate-12 opacity-30" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent/20 rounded-lg -rotate-12 opacity-30" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              <Badge
                variant="secondary"
                className="mb-8 bg-primary/20 border-primary/30 text-white"
              >
                <Bot className="h-4 w-4 mr-2" />
                Automatisation intelligente
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 text-foreground leading-tight">
                Transformez vos <span className="text-primary">QR codes</span>{" "}
                en workflows intelligents
              </h1>

              <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
                Créez des automatisations complexes déclenchées par un simple
                scan. De la collecte de leads aux intégrations API avancées.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-primary hover:bg-primary/90 h-14"
                  asChild
                >
                  <Link href="/create">
                    <Play className="mr-2 h-5 w-5" />
                    Créer mon premier flow
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-border hover:bg-muted h-14 bg-transparent"
                >
                  <QrCode className="mr-2 h-5 w-5" />
                  Voir des exemples
                </Button>
              </div>
            </div>

            {/* Right side - Flow visualization */}
            <div className="relative">
              <div className="bg-card/30 border border-border/50 rounded-2xl p-8 backdrop-blur-sm">
                <div className="flex flex-col gap-6">
                  {/* QR Code */}
                  <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border border-border/30">
                    <div className="w-16 h-16 bg-primary/10 border-2 border-primary/30 rounded-lg flex items-center justify-center">
                      <QrCode className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        QR Code scanné
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Déclencheur automatique
                      </div>
                    </div>
                  </div>

                  <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto" />

                  {/* Workflow steps */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">1</span>
                      </div>
                      <span className="text-sm text-foreground">
                        Collecte des données utilisateur
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">2</span>
                      </div>
                      <span className="text-sm text-foreground">
                        Envoi email de bienvenue
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">3</span>
                      </div>
                      <span className="text-sm text-foreground">
                        Ajout au CRM
                      </span>
                    </div>
                  </div>

                  <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto" />

                  {/* Result */}
                  <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg border border-primary/30">
                    <div className="w-16 h-16 bg-primary/20 border-2 border-primary/40 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        Lead qualifié
                      </div>
                      <div className="text-sm text-foreground/80">
                        Prêt pour le suivi commercial
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Hero - Statistics */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-muted/10 relative z-10">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Des résultats qui parlent
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Nos utilisateurs voient des résultats concrets dès les premiers
            jours
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-4">85%</div>
              <div className="text-lg font-semibold text-foreground mb-2">
                Taux de conversion
              </div>
              <div className="text-muted-foreground">
                Plus élevé qu'un formulaire classique
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">3s</div>
              <div className="text-lg font-semibold text-foreground mb-2">
                Temps moyen
              </div>
              <div className="text-muted-foreground">
                Du scan à l'action complétée
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-4">500+</div>
              <div className="text-lg font-semibold text-foreground mb-2">
                Entreprises
              </div>
              <div className="text-muted-foreground">
                Font confiance à FlowQR
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Hero - Use Cases */}
      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Cas d'usage illimités
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              De la simple collecte d'emails aux workflows d'entreprise
              complexes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary border-2 border-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Créez votre workflow
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Utilisez notre éditeur visuel pour concevoir des séquences
                d'actions : envoi d'emails, notifications, intégrations API, et
                bien plus.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent border-2 border-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Générez le QR code
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                FlowQR génère automatiquement un QR code unique lié à votre
                workflow. Personnalisez son apparence selon vos besoins.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary border-2 border-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Déployez et analysez
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Partagez votre QR code et suivez les interactions en temps réel.
                Optimisez vos workflows grâce aux analytics détaillées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Hero - Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-t from-transparent via-primary/5 to-transparent relative z-10">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Déjà utilisé par 500+ entrepreneurs</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground text-balance">
              Prêt à automatiser votre business ?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 text-balance leading-relaxed">
              Rejoignez la révolution des QR codes intelligents. Commencez
              gratuitement, aucune carte de crédit requise.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="text-lg px-8 bg-primary hover:bg-primary/90 h-14"
              asChild
            >
              <Link href="/create">
                <Zap className="mr-2 h-5 w-5" />
                Créer mon premier flow
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-border hover:bg-muted h-14 bg-transparent"
              asChild
            >
              <Link href="/dashboard">
                <BarChart3 className="mr-2 h-5 w-5" />
                Voir le dashboard
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Gratuit pour toujours • Pas de limite de scans • Support 24/7
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background/80 backdrop-blur-md py-12 px-4 relative z-10">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="relative">
              <QrCode className="h-6 w-6 text-primary" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full" />
            </div>
            <span className="text-lg font-semibold text-foreground">
              FlowQR
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 FlowQR. Révolutionnez vos QR codes.
          </p>
        </div>
      </footer>
    </div>
  );
}
