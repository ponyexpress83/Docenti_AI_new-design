import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="gradient-bg absolute inset-0 opacity-90" />
          <div className="relative px-6 py-16 sm:px-16 sm:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <Mail className="h-12 w-12 text-white mx-auto mb-6" />
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ricevi i migliori articoli
              </h2>
              <p className="mt-4 text-lg text-white/90">
                Iscriviti alla newsletter per ricevere settimanalmente i migliori contenuti su AI e didattica
              </p>
              <form className="mt-8 flex max-w-md mx-auto items-center gap-x-4">
                <Input
                  type="email"
                  placeholder="Il tuo indirizzo email"
                  className="bg-white/10 text-white placeholder:text-white/70 border-white/20"
                />
                <Button className="bg-white text-primary hover:bg-white/90">
                  Iscriviti
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}