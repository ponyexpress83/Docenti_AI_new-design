import { Button } from "@/components/ui/button";
import { Search, Brain, Sparkles, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <div className="relative min-h-[90vh] overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-cyan-50 to-yellow-50" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 floating animation-delay-200">
          <Brain className="h-12 w-12 text-purple-500 opacity-30" />
        </div>
        <div className="absolute top-1/3 right-1/4 floating animation-delay-500">
          <Sparkles className="h-10 w-10 text-cyan-500 opacity-30" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 floating animation-delay-700">
          <Brain className="h-8 w-8 text-yellow-500 opacity-30" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 lg:pt-32">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full px-6 py-2 border border-purple-200 bg-white/50 backdrop-blur-sm mb-8 hover:scale-105 transition-transform cursor-pointer group">
            <Sparkles className="h-5 w-5 text-purple-600 mr-2 group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-medium text-purple-900">
              Scopri come l'AI sta trasformando la didattica
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-purple-600 via-cyan-500 to-yellow-400 text-transparent bg-clip-text animate-gradient">
            Docenti.AI
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Il blog dedicato all'intelligenza artificiale per la didattica.
            <br />
            <span className="text-purple-600 font-semibold">Innovazione</span>, 
            <span className="text-cyan-500 font-semibold"> Strumenti</span> e
            <span className="text-yellow-400 font-semibold"> Risorse</span> per i docenti del futuro.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-500 shine px-8 group">
              Ultimi Articoli
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="glow-effect group">
              Scopri le Risorse
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex max-w-md mx-auto gap-x-4">
            <Input 
              type="search" 
              placeholder="Cerca articoli..."
              className="flex-1 border-purple-200 focus:border-purple-500 focus:ring-purple-500 hover:border-purple-300 transition-colors"
            />
            <Button className="bg-purple-600 hover:bg-purple-500 shine group">
              <Search className="h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Gradient blur effects */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-600 to-cyan-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  );
}