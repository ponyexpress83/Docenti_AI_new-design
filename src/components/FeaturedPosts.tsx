import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    title: "Come utilizzare ChatGPT nella preparazione delle lezioni",
    excerpt: "Una guida pratica per sfruttare l'AI nella creazione di materiale didattico efficace",
    category: "Tutorial",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=400&fit=crop",
    date: "Mar 15, 2024"
  },
  {
    title: "L'impatto dell'AI sulla valutazione degli studenti",
    excerpt: "Analisi dei pro e contro dell'utilizzo dell'intelligenza artificiale nel processo valutativo",
    category: "Approfondimenti",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=400&fit=crop",
    date: "Mar 12, 2024"
  },
  {
    title: "10 strumenti AI gratuiti per docenti",
    excerpt: "Una selezione delle migliori risorse AI disponibili gratuitamente per l'insegnamento",
    category: "Risorse",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&h=400&fit=crop",
    date: "Mar 10, 2024"
  }
];

export function FeaturedPosts() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            Articoli in evidenza
          </h2>
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            Tutti gli articoli <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-sm text-primary bg-primary/10 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {post.date}
                  </span>
                  <Button variant="link" className="text-primary hover:text-primary/80 p-0">
                    Leggi di più <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}