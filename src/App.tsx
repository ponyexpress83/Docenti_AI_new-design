import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { FeaturedPosts } from "@/components/FeaturedPosts";
import { Categories } from "@/components/Categories";
import { Newsletter } from "@/components/Newsletter";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <FeaturedPosts />
        <Categories />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;