import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 98765 43210', '+91 87654 32109'],
    description: 'Available 9 AM - 9 PM (IST)'
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['contact@astrokhushi.com', 'consultations@astrokhushi.com'],
    description: 'We reply within 24 hours'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['123 Spiritual Center', 'Delhi, India 110001'],
    description: 'By appointment only'
  },
  {
    icon: Clock,
    title: 'Consultation Hours',
    details: ['Mon - Sat: 9 AM - 9 PM', 'Sunday: 10 AM - 6 PM'],
    description: 'All times in IST'
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Connect with <span className="text-gradient-gold">Divine Guidance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discover your cosmic destiny? Reach out for personalized 
            astrological consultation and spiritual guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-divine border-border/50 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-serif font-bold text-foreground">
                    Book Your Consultation
                  </h3>
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input 
                        placeholder="Enter your full name"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input 
                        placeholder="+91 98765 43210"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Date of Birth *
                      </label>
                      <Input 
                        type="date"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Time of Birth
                      </label>
                      <Input 
                        type="time"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Place of Birth
                      </label>
                      <Input 
                        placeholder="City, State, Country"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Required *
                    </label>
                    <select className="w-full px-3 py-2 border border-border/50 rounded-md focus:border-primary focus:outline-none bg-background">
                      <option value="">Select a service</option>
                      <option value="birth-chart">Birth Chart Reading</option>
                      <option value="career">Career Guidance</option>
                      <option value="love">Love & Relationships</option>
                      <option value="financial">Financial Astrology</option>
                      <option value="child">Child Astrology</option>
                      <option value="vastu">Vastu Consultation</option>
                      <option value="business">Business Astrology</option>
                      <option value="muhurat">Muhurat Selection</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Questions/Concerns
                    </label>
                    <Textarea 
                      placeholder="Please share your specific questions or areas of concern..."
                      rows={4}
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  
                  <Button size="lg" className="w-full bg-primary hover:bg-primary-light text-primary-foreground font-semibold transition-divine shadow-elegant">
                    <Send className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="shadow-elegant border-border/50 bg-card/90 backdrop-blur-sm hover:shadow-divine transition-divine">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-divine rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-primary font-medium">
                            {detail}
                          </p>
                        ))}
                        <p className="text-sm text-muted-foreground mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Quick Contact CTA */}
            <Card className="bg-gradient-divine border-0 shadow-divine">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-serif font-bold text-white mb-2">
                  Need Immediate Guidance?
                </h4>
                <p className="text-white/90 mb-4">
                  Call now for urgent consultations and emergency readings.
                </p>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold transition-divine w-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;