import { Button } from '@/components/ui/button';
import { Star, Sparkles, Moon, Sun } from 'lucide-react';
import heroImage from '@/assets/hero-astrology.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Divine astrology goddess" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <Star className="w-8 h-8 text-divine-gold opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-pulse">
        <Sparkles className="w-6 h-6 text-divine-gold opacity-50" />
      </div>
      <div className="absolute bottom-20 left-20 animate-bounce delay-1000">
        <Moon className="w-10 h-10 text-divine-gold opacity-40" />
      </div>
      <div className="absolute top-60 right-10 animate-pulse delay-500">
        <Sun className="w-8 h-8 text-divine-gold opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-divine-gold/20 text-divine-gold rounded-full text-sm font-medium backdrop-blur-sm border border-divine-gold/30">
              ✨ Trusted by 10,000+ People
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Discover Your
            <span className="block text-gradient-gold">Divine Destiny</span>
            with Vedic Wisdom
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Unlock the secrets of your future through ancient Vedic astrology. 
            Get personalized horoscope readings, birth chart analysis, and spiritual guidance 
            from expert astrologer Khushi.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-divine-gold hover:bg-divine-gold/90 text-primary font-bold py-4 px-8 transition-divine shadow-elegant text-lg">
              Get Free Reading
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-8 transition-divine backdrop-blur-sm"
            >
              Book Consultation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-md">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-divine-gold">15+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-divine-gold">10K+</div>
              <div className="text-white/80 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-divine-gold">98%</div>
              <div className="text-white/80 text-sm">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;