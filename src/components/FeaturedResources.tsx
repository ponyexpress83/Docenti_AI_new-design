import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Code, Brain, Users } from "lucide-react";

const resources = [
  {
    title: "Guida all'AI per principianti",
    description: "Scopri i fondamenti dell'intelligenza artificiale nell'educazione",
    icon: Brain,
    category: "Fondamenti",
  },
  {
    title: "Strumenti AI per la valutazione",
    description: "Ottimizza il processo di valutazione con l'AI",
    icon: Code,
    category: "Strumenti",
  },
  {
    title: "Personalizzazione dell'apprendimento",
    description: "Tecniche per adattare l'insegnamento a ogni studente",
    icon: Users,
    category: "Metodologie",
  },
  {
    title: "Corso completo sull'AI",
    description: "Percorso strutturato per padroneggiare l'AI nella didattica",
    icon: BookOpen,
    category: "Corsi",
  },
];

export function FeaturedResources() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Risorse in evidenza
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Le risorse più popolari per iniziare con l'AI nella didattica
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Card key={resource.title} className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-blue-900/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-900" />
                </div>
                <div className="px-2 py-1 text-sm text-blue-900 bg-blue-100 rounded-full w-fit mb-3">
                  {resource.category}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Button variant="link" className="p-0 text-blue-900 hover:text-blue-800">
                  Scopri di più <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-blue-900 hover:bg-blue-800">
            Esplora tutte le risorse
          </Button>
        </div>
      </div>
    </section>
  );
}