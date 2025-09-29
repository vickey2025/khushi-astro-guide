import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Star } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-bounce">
          <Star className="w-8 h-8 text-divine-gold opacity-30" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <Star className="w-6 h-6 text-divine-amber opacity-20" />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce delay-1000">
          <Star className="w-10 h-10 text-primary opacity-20" />
        </div>
        <div className="absolute top-60 right-10 animate-pulse delay-500">
          <Star className="w-8 h-8 text-divine-gold opacity-25" />
        </div>
      </div>

      <div className="text-center relative z-10 max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-divine rounded-full flex items-center justify-center mx-auto mb-6 shadow-divine">
            <Star className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl font-serif font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
            Path Not Found in the Stars
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            The cosmic energies have led you to an unknown path. 
            Let us guide you back to your destined journey.
          </p>
        </div>
        
        <Button size="lg" asChild className="bg-primary hover:bg-primary-light text-primary-foreground font-semibold transition-divine shadow-elegant">
          <a href="/" className="flex items-center space-x-2">
            <Home className="w-5 h-5" />
            <span>Return to Cosmic Home</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
