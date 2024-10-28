import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Docenti.ai ha rivoluzionato il mio modo di insegnare. Gli strumenti AI mi permettono di personalizzare l'apprendimento per ogni studente.",
    author: "Prof.ssa Maria Rossi",
    role: "Docente di Matematica",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    quote: "La piattaforma mi ha aiutato a risparmiare ore nella preparazione delle lezioni, permettendomi di concentrarmi di più sull'insegnamento.",
    author: "Prof. Marco Bianchi",
    role: "Docente di Storia",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    quote: "Gli studenti sono più coinvolti e motivati grazie agli strumenti innovativi che ho scoperto su Docenti.ai.",
    author: "Prof.ssa Laura Verdi",
    role: "Docente di Scienze",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Cosa dicono i docenti
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Esperienze reali di chi usa Docenti.ai ogni giorno
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="p-6">
              <Quote className="h-8 w-8 text-blue-900 mb-4" />
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}