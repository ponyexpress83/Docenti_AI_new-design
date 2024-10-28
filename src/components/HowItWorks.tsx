import { Card } from "@/components/ui/card";
import { Search, BookOpen, Presentation, LineChart } from "lucide-react";

const steps = [
  {
    title: "Esplora le risorse",
    description: "Accedi alla nostra libreria di contenuti e strumenti AI",
    icon: Search,
  },
  {
    title: "Apprendi le basi",
    description: "Impara i fondamenti dell'AI attraverso i nostri corsi guidati",
    icon: BookOpen,
  },
  {
    title: "Implementa in classe",
    description: "Applica gli strumenti AI nella tua pratica didattica",
    icon: Presentation,
  },
  {
    title: "Monitora i risultati",
    description: "Analizza l'impatto e migliora continuamente",
    icon: LineChart,
  },
];

export function HowItWorks() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Come funziona
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Un percorso guidato per integrare l'AI nella tua didattica
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.title} className="p-6 relative">
                <div className="absolute -top-4 -left-4 h-8 w-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="h-12 w-12 rounded-lg bg-blue-900/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}