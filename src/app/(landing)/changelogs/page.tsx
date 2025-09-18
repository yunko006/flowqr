import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, BookOpen, Users, Github } from "lucide-react";
import Link from "next/link";

const changelogData = [
  {
    version: "v1.2.0",
    date: "Dec 15, 2024",
    features: [
      {
        title: "Advanced Flow Templates",
        description:
          "Pre-built templates for common use cases like lead generation and event registration",
      },
      {
        title: "Real-time Analytics Dashboard",
        description:
          "Track QR code scans, conversion rates, and user engagement in real-time",
      },
      {
        title: "Custom Branding Options",
        description:
          "Add your logo and brand colors to QR codes and landing pages",
      },
    ],
    bugFixes: [
      {
        title: "Flow Editor Performance",
        description:
          "Improved rendering speed for complex workflows with 50+ nodes",
      },
      {
        title: "Mobile QR Scanner",
        description: "Fixed camera permission issues on iOS Safari",
      },
      {
        title: "Export Functionality",
        description:
          "Resolved PNG export quality issues for high-resolution QR codes",
      },
    ],
  },
  {
    version: "v1.1.5",
    date: "Nov 28, 2024",
    features: [
      {
        title: "Webhook Integration",
        description:
          "Connect your flows to external services with custom webhook endpoints",
      },
      {
        title: "Conditional Logic Nodes",
        description:
          "Create dynamic flows that adapt based on user responses and data",
      },
    ],
    bugFixes: [
      {
        title: "Database Connection Stability",
        description:
          "Fixed intermittent connection drops during high traffic periods",
      },
      {
        title: "Flow Validation",
        description:
          "Improved error handling for incomplete or invalid flow configurations",
      },
    ],
  },
  {
    version: "v1.1.0",
    date: "Nov 10, 2024",
    features: [
      {
        title: "Multi-language Support",
        description: "Added support for French, Spanish, and German interfaces",
      },
      {
        title: "Team Collaboration",
        description: "Share and collaborate on QR flows with team members",
      },
    ],
    bugFixes: [
      {
        title: "QR Code Generation",
        description: "Fixed encoding issues with special characters in URLs",
      },
      {
        title: "Flow Editor UI",
        description: "Resolved drag-and-drop issues on touch devices",
      },
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="min-h-screen w-full  bg-black relative">
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Description */}
            <div className="lg:sticky lg:top-32">
              <h1 className="text-4xl font-bold text-foreground mb-6 text-balance">
                All of the changes made will be available here.
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                FlowQR is a comprehensive QR code automation platform that
                provides a wide range of features to make workflow creation
                easier and more powerful.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 bg-transparent"
                >
                  <BookOpen className="h-4 w-4" />
                  Documentation
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 bg-transparent"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 bg-transparent"
                >
                  <Users className="h-4 w-4" />
                  Community
                </Button>
              </div>
            </div>

            {/* Right Column - Changelog Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-12">
                {changelogData.map((release, index) => (
                  <div key={release.version} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-2 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                    <div className="ml-12">
                      {/* Version Header */}
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-foreground">
                          {release.version}
                        </h2>
                        <span className="text-sm text-muted-foreground">
                          {release.date}
                        </span>
                      </div>

                      {/* Features Section */}
                      {release.features.length > 0 && (
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-lg">🚀</span>
                            <h3 className="font-medium text-foreground">
                              Features
                            </h3>
                          </div>
                          <ul className="space-y-2">
                            {release.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-start gap-2"
                              >
                                <span className="text-muted-foreground mt-1">
                                  •
                                </span>
                                <div>
                                  <span className="font-medium text-foreground">
                                    {feature.title}
                                  </span>
                                  <span className="text-muted-foreground">
                                    {" "}
                                    - {feature.description}
                                  </span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Bug Fixes Section */}
                      {release.bugFixes.length > 0 && (
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-lg">🐛</span>
                            <h3 className="font-medium text-foreground">
                              Bug Fixes
                            </h3>
                          </div>
                          <ul className="space-y-2">
                            {release.bugFixes.map((fix, fixIndex) => (
                              <li
                                key={fixIndex}
                                className="flex items-start gap-2"
                              >
                                <span className="text-muted-foreground mt-1">
                                  •
                                </span>
                                <div>
                                  <span className="font-medium text-foreground">
                                    {fix.title}
                                  </span>
                                  <span className="text-muted-foreground">
                                    {" "}
                                    - {fix.description}
                                  </span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* View on GitHub Link */}
                      <Link
                        href="#"
                        className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        View changes on GitHub
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
