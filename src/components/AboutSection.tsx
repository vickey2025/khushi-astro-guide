import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, BookOpen, Users, Star, CheckCircle, Youtube } from 'lucide-react';
import khushiPortrait from '@/assets/khushi-portrait.jpg';

const achievements = [
  { icon: Award, text: 'Certified Vedic Astrologer', color: 'text-divine-gold' },
  { icon: BookOpen, text: '15+ Years of Study & Practice', color: 'text-divine-amber' },
  { icon: Users, text: '10,000+ Happy Consultations', color: 'text-primary' },
  { icon: Star, text: '4.9/5 Client Rating', color: 'text-divine-gold' },
];

const specializations = [
  'Vedic Birth Chart Analysis',
  'Predictive Astrology',
  'Relationship Compatibility',
  'Career & Financial Guidance',
  'Spiritual Counseling',
  'Vastu Shastra',
  'Numerology',
  'Gemstone Recommendations'
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Profile */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-divine-gold/20 text-divine-gold border-divine-gold/30">
            About Astro Khushi
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Meet Your Spiritual Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Illuminating paths through ancient wisdom and cosmic insights
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          {/* Left Column - Profile Image */}
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border-4 border-primary/20 shadow-divine">
                  <img 
                    src={khushiPortrait} 
                    alt="Khushi - Professional Vedic Astrologer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-6 py-2 shadow-elegant">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-divine-gold fill-divine-gold" />
                    <span className="text-lg font-bold">Khushi</span>
                    <Star className="w-5 h-5 text-divine-gold fill-divine-gold" />
                  </div>
                </div>
              </div>
              
              <a 
                href="https://www.youtube.com/@KhushiAstrologer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block mt-8"
              >
                <Button variant="outline" className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-divine">
                  <Youtube className="w-5 h-5 mr-2" />
                  Visit YouTube Channel
                </Button>
              </a>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">10K+</div>
                  <div className="text-sm text-muted-foreground">Consultations</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">4.9</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Certified</div>
                </Card>
              </div>
            </div>
          </div>

          {/* Right Column - Story & Details */}
          <div className="lg:col-span-3 space-y-8">
            {/* Story Section */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                My Journey into <span className="text-gradient-gold">Vedic Astrology</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Namaste! I am Khushi, and my journey with Vedic astrology began over 15 years ago 
                  when I experienced a profound spiritual awakening. What started as personal curiosity 
                  transformed into a deep commitment to mastering the ancient science of Jyotish.
                </p>
                <p>
                  Born into a family with spiritual roots, I was naturally drawn to the mysteries of the 
                  cosmos. I spent years studying under renowned Vedic masters, learning not just the technical 
                  aspects of astrology, but also the intuitive and compassionate approach needed to guide others 
                  through life's complexities.
                </p>
                <p>
                  My practice combines traditional Vedic wisdom with modern understanding. I believe that 
                  astrology is not about predicting a fixed future, but about understanding cosmic patterns 
                  and making empowered choices. Each consultation is a sacred space where ancient wisdom 
                  meets your unique life journey.
                </p>
                <p>
                  Through my YouTube channel and personal consultations, I've had the privilege of guiding 
                  over 10,000 individuals from around the world. My mission is to make Vedic wisdom accessible, 
                  practical, and transformative for everyone seeking clarity and purpose.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <Card className="p-6 bg-card/80 backdrop-blur-sm">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                Credentials & Recognition
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-background/50">
                      <div className={`${achievement.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {achievement.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Philosophy */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                My Approach & Philosophy
              </h3>
              <div className="space-y-4">
                <Card className="p-5 border-l-4 border-primary">
                  <h4 className="font-semibold text-foreground mb-2">Compassionate Guidance</h4>
                  <p className="text-sm text-muted-foreground">
                    Every reading is conducted with empathy and understanding, creating a safe space 
                    for honest exploration of your life's questions.
                  </p>
                </Card>
                <Card className="p-5 border-l-4 border-primary">
                  <h4 className="font-semibold text-foreground mb-2">Traditional Yet Practical</h4>
                  <p className="text-sm text-muted-foreground">
                    I honor ancient Vedic traditions while making insights relevant and applicable 
                    to modern life challenges.
                  </p>
                </Card>
                <Card className="p-5 border-l-4 border-primary">
                  <h4 className="font-semibold text-foreground mb-2">Empowering You</h4>
                  <p className="text-sm text-muted-foreground">
                    My goal is to empower you with knowledge and clarity so you can make informed 
                    decisions aligned with your highest good.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Specializations Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Areas of Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive astrological services tailored to your unique spiritual journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((specialization, index) => (
              <Card key={index} className="p-6 hover:shadow-divine transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {specialization}
                    </h4>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-divine text-white p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Begin Your Cosmic Journey Today
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Book a personal consultation and discover the insights waiting in your birth chart
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold shadow-elegant">
              Schedule Personal Reading
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Special Offers
            </Button>
          </div>
          <div className="mt-8 inline-flex items-center space-x-2 bg-white/10 px-6 py-3 rounded-full">
            <Badge className="bg-divine-gold text-white font-bold">
              Save ₹500
            </Badge>
            <span className="text-sm">First consultation 30% off</span>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;