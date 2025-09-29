import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, BookOpen, Users, Star, CheckCircle } from 'lucide-react';

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 bg-divine-gold/20 text-divine-gold border-divine-gold/30">
                About Astro Khushi
              </Badge>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Your Trusted Guide to
                <span className="block text-gradient-gold">Cosmic Wisdom</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Namaste! I am Khushi, a dedicated Vedic astrologer with over 15 years of experience 
                in guiding souls through the ancient science of Jyotish. My journey began with a 
                deep spiritual calling to help people understand their divine purpose and navigate 
                life's challenges with cosmic wisdom.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trained under renowned masters and certified in classical Vedic astrology, 
                I combine traditional knowledge with intuitive insights to provide accurate 
                and compassionate guidance. My mission is to empower you with the knowledge 
                to make informed decisions and live in harmony with cosmic energies.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`${achievement.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {achievement.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary-light text-primary-foreground font-semibold transition-divine shadow-elegant">
              Schedule Personal Reading
            </Button>
          </div>

          {/* Right Column - Specializations Card */}
          <div>
            <Card className="shadow-divine border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-divine rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                    Areas of Expertise
                  </h3>
                  <p className="text-muted-foreground">
                    Specialized services for your spiritual journey
                  </p>
                </div>

                <div className="space-y-3">
                  {specializations.map((specialization, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">
                        {specialization}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">Special Offer</p>
                      <p className="text-sm text-muted-foreground">First consultation 30% off</p>
                    </div>
                    <Badge className="bg-primary text-primary-foreground font-bold">
                      Save ₹500
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;