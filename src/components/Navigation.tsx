import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Brain } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-purple-600 animate-pulse" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 via-cyan-500 to-yellow-400 text-transparent bg-clip-text">
              Docenti.AI
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-all hover:scale-105">Risorse</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-all hover:scale-105">Blog</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-all hover:scale-105">Chi Siamo</a>
            <Button variant="outline" className="glow-effect">
              <User className="mr-2 h-4 w-4" />
              Accedi
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-500 shine">
              Inizia Ora
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">Risorse</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">Blog</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">Chi Siamo</a>
            <div className="px-3 py-2 space-y-2">
              <Button variant="outline" className="w-full justify-center glow-effect">
                <User className="mr-2 h-4 w-4" />
                Accedi
              </Button>
              <Button className="w-full bg-purple-600 hover:bg-purple-500 shine">
                Inizia Ora
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}