import { Card } from "@/components/ui/card";
import { Clock, Brain, Lightbulb, GraduationCap } from "lucide-react";

const benefits = [
  {
    title: "Risparmio di tempo",
    description: "Ottimizza la preparazione delle lezioni con strumenti AI intelligenti",
    icon: Clock,
  },
  {
    title: "Personalizzazione",
    description: "Adatta l'apprendimento alle esigenze individuali degli studenti",
    icon: Brain,
  },
  {
    title: "Innovazione didattica",
    description: "Integra le ultime tecnologie nel tuo metodo di insegnamento",
    icon: Lightbulb,
  },
  {
    title: "Sviluppo professionale",
    description: "Cresci professionalmente con formazione continua sull'AI",
    icon: GraduationCap,
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            I vantaggi di Docenti.ai
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Scopri come l'AI può trasformare il tuo modo di insegnare
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <Card key={benefit.title} className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-blue-900/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}