import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Compass, Heart, Coins, Baby, HomeIcon, Briefcase, Clock } from 'lucide-react';
import servicesBackground from '@/assets/services-bg.jpg';

const services = [
  {
    icon: Star,
    title: 'Birth Chart Reading',
    description: 'Complete analysis of your birth chart (Kundali) with planetary positions and their effects on your life.',
    price: '₹999',
    duration: '45 mins'
  },
  {
    icon: Compass,
    title: 'Career Guidance',
    description: 'Discover your ideal career path and professional success through astrological insights.',
    price: '₹1,499',
    duration: '60 mins'
  },
  {
    icon: Heart,
    title: 'Love & Relationships',
    description: 'Find compatibility, resolve relationship issues, and discover your soulmate through Vedic matching.',
    price: '₹1,299',
    duration: '50 mins'
  },
  {
    icon: Coins,
    title: 'Financial Astrology',
    description: 'Get insights on wealth, investments, and financial growth based on planetary influences.',
    price: '₹1,199',
    duration: '45 mins'
  },
  {
    icon: Baby,
    title: 'Child Astrology',
    description: 'Name suggestions, future predictions, and guidance for your child\'s bright future.',
    price: '₹899',
    duration: '40 mins'
  },
  {
    icon: HomeIcon,
    title: 'Vastu Consultation',
    description: 'Home and office Vastu guidance to bring positive energy and prosperity.',
    price: '₹1,999',
    duration: '75 mins'
  },
  {
    icon: Briefcase,
    title: 'Business Astrology',
    description: 'Launch dates, partnership compatibility, and business growth strategies.',
    price: '₹2,499',
    duration: '90 mins'
  },
  {
    icon: Clock,
    title: 'Muhurat Selection',
    description: 'Find the most auspicious time for important life events and ceremonies.',
    price: '₹799',
    duration: '30 mins'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={servicesBackground} 
          alt="Astrology symbols background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our Sacred <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Vedic astrology services to guide you through every aspect of life 
            with ancient wisdom and modern understanding.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-divine transition-divine bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-divine rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-divine">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-primary">{service.price}</span>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                      {service.duration}
                    </span>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary-light text-primary-foreground transition-divine">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-divine p-8 rounded-2xl shadow-divine max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-white/90 mb-6">
              Get a free consultation call to understand which astrological service 
              would be most beneficial for your current situation.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold transition-divine">
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;