import { Card } from "@/components/ui/card";
import { BookOpen, Code, Brain, Users, Lightbulb, GraduationCap } from "lucide-react";

const categories = [
  {
    title: "Fondamenti AI",
    description: "Guide introduttive e concetti base",
    icon: Brain,
    count: 15,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Tutorial Pratici",
    description: "Guide passo-passo e implementazioni",
    icon: Code,
    count: 23,
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Metodologie",
    description: "Approcci innovativi all'insegnamento",
    icon: Lightbulb,
    count: 18,
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    title: "Strumenti",
    description: "Recensioni e confronti di strumenti AI",
    icon: BookOpen,
    count: 27,
    gradient: "from-green-400 to-cyan-500"
  },
  {
    title: "Casi Studio",
    description: "Esperienze reali e best practices",
    icon: Users,
    count: 12,
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    title: "Formazione",
    description: "Percorsi di sviluppo professionale",
    icon: GraduationCap,
    count: 20,
    gradient: "from-pink-500 to-rose-500"
  }
];

export function Categories() {
  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-cyan-500 to-yellow-400 text-transparent bg-clip-text mb-4">
            Esplora per categoria
          </h2>
          <p className="text-lg text-gray-600">
            Trova gli articoli più rilevanti per le tue esigenze
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title} 
                className="p-6 hover-card relative overflow-hidden group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {category.count} articoli
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}