import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Users, Star } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Complete Birth Chart Analysis - Beginner to Advanced',
    description: 'Master the art of reading birth charts with detailed planetary analysis and predictions.',
    duration: '45 mins',
    students: '2.5K',
    rating: 4.8,
    level: 'Beginner',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop,trim=0;1043.4522821576763;0;697.6929460580913/A3QlKPKKE7ulbQOy/img_9143-mxB21LNaoOSRk9jZ.JPG'
  },
  {
    id: 2,
    title: 'Vedic Astrology Fundamentals - Houses & Planets',
    description: 'Understanding the 12 houses and 9 planets in Vedic astrology system.',
    duration: '38 mins',
    students: '1.8K',
    rating: 4.9,
    level: 'Beginner',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop,trim=0;1043.4522821576763;0;697.6929460580913/A3QlKPKKE7ulbQOy/img_9143-mxB21LNaoOSRk9jZ.JPG'
  },
  {
    id: 3,
    title: 'Marriage & Relationship Astrology Secrets',
    description: 'Learn to predict marriage timing and relationship compatibility using astrology.',
    duration: '52 mins',
    students: '3.2K',
    rating: 4.7,
    level: 'Intermediate',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop,trim=0;1043.4522821576763;0;697.6929460580913/A3QlKPKKE7ulbQOy/img_9143-mxB21LNaoOSRk9jZ.JPG'
  },
  {
    id: 4,
    title: 'Career & Business Astrology Mastery',
    description: 'Discover career potential and business success through planetary analysis.',
    duration: '41 mins',
    students: '2.1K',
    rating: 4.8,
    level: 'Intermediate',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop,trim=0;1043.4522821576763;0;697.6929460580913/A3QlKPKKE7ulbQOy/img_9143-mxB21LNaoOSRk9jZ.JPG'
  },
  {
    id: 5,
    title: 'Planetary Periods (Dasha) Complete Guide',
    description: 'Master the complex system of planetary periods and their effects on life.',
    duration: '67 mins',
    students: '1.9K',
    rating: 4.9,
    level: 'Advanced',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop,trim=0;1043.4522821576763;0;697.6929460580913/A3QlKPKKE7ulbQOy/img_9143-mxB21LNaoOSRk9jZ.JPG'
  },
  {
    id: 6,
    title: 'Health Astrology & Medical Predictions',
    description: 'Learn to predict health issues and remedies through astrological analysis.',
    duration: '44 mins',
    students: '1.6K',
    rating: 4.6,
    level: 'Advanced',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop,trim=0;1043.4522821576763;0;697.6929460580913/A3QlKPKKE7ulbQOy/img_9143-mxB21LNaoOSRk9jZ.JPG'
  },
  {
    id: 7,
    title: 'Nakshatras (Lunar Mansions) Deep Dive',
    description: 'Comprehensive guide to all 27 nakshatras and their profound meanings.',
    duration: '73 mins',
    students: '2.3K',
    rating: 4.8,
    level: 'Advanced',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop,trim=0;1043.4522821576763;0;697.6929460580913/A3QlKPKKE7ulbQOy/img_9143-mxB21LNaoOSRk9jZ.JPG'
  },
  {
    id: 8,
    title: 'Remedial Astrology - Gemstones & Mantras',
    description: 'Learn powerful remedies including gemstones, mantras, and rituals.',
    duration: '36 mins',
    students: '2.8K',
    rating: 4.7,
    level: 'Intermediate',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop,trim=0;1043.4522821576763;0;697.6929460580913/A3QlKPKKE7ulbQOy/img_9143-mxB21LNaoOSRk9jZ.JPG'
  },
  {
    id: 9,
    title: 'Vastu Shastra for Home & Office Success',
    description: 'Ancient Vastu principles for creating harmonious living and working spaces.',
    duration: '49 mins',
    students: '3.1K',
    rating: 4.9,
    level: 'Beginner',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop,trim=0;1043.4522821576763;0;697.6929460580913/A3QlKPKKE7ulbQOy/img_9143-mxB21LNaoOSRk9jZ.JPG'
  },
  {
    id: 10,
    title: 'Muhurat Selection - Auspicious Timing',
    description: 'Master the art of selecting perfect timing for important life events.',
    duration: '33 mins',
    students: '1.7K',
    rating: 4.8,
    level: 'Intermediate',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop,trim=0;1043.4522821576763;0;697.6929460580913/A3QlKPKKE7ulbQOy/img_9143-mxB21LNaoOSRk9jZ.JPG'
  },
  {
    id: 11,
    title: 'Palmistry & Face Reading Secrets',
    description: 'Learn to read palms and faces for personality and future predictions.',
    duration: '58 mins',
    students: '2.4K',
    rating: 4.6,
    level: 'Beginner',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop,trim=0;1043.4522821576763;0;697.6929460580913/A3QlKPKKE7ulbQOy/img_9143-mxB21LNaoOSRk9jZ.JPG'
  },
  {
    id: 12,
    title: 'Numerology & Name Analysis Complete Course',
    description: 'Discover the power of numbers and names in shaping destiny.',
    duration: '42 mins',
    students: '2.0K',
    rating: 4.7,
    level: 'Beginner',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop,trim=0;1043.4522821576763;0;697.6929460580913/A3QlKPKKE7ulbQOy/img_9143-mxB21LNaoOSRk9jZ.JPG'
  },
  {
    id: 13,
    title: 'Transit Predictions & Current Events',
    description: 'Learn to predict current events and their impact using planetary transits.',
    duration: '39 mins',
    students: '1.5K',
    rating: 4.8,
    level: 'Advanced',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop,trim=0;1043.4522821576763;0;697.6929460580913/A3QlKPKKE7ulbQOy/img_9143-mxB21LNaoOSRk9jZ.JPG'
  },
  {
    id: 14,
    title: 'Child Astrology & Name Selection',
    description: 'Complete guide to child birth charts, naming, and future guidance.',
    duration: '46 mins',
    students: '2.6K',
    rating: 4.9,
    level: 'Intermediate',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop,trim=0;1043.4522821576763;0;697.6929460580913/A3QlKPKKE7ulbQOy/img_9143-mxB21LNaoOSRk9jZ.JPG'
  },
  {
    id: 15,
    title: 'Financial Astrology & Wealth Predictions',
    description: 'Master the art of predicting financial success and investment timing.',
    duration: '51 mins',
    students: '2.9K',
    rating: 4.8,
    level: 'Intermediate',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop,trim=0;1043.4522821576763;0;697.6929460580913/A3QlKPKKE7ulbQOy/img_9143-mxB21LNaoOSRk9jZ.JPG'
  },
  {
    id: 16,
    title: 'Advanced Yogas in Vedic Astrology',
    description: 'Deep dive into Raja Yoga, Dhana Yoga, and other powerful combinations.',
    duration: '64 mins',
    students: '1.4K',
    rating: 4.9,
    level: 'Advanced',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop,trim=0;1043.4522821576763;0;697.6929460580913/A3QlKPKKE7ulbQOy/img_9143-mxB21LNaoOSRk9jZ.JPG'
  },
  {
    id: 17,
    title: 'Rahu & Ketu - The Shadow Planets',
    description: 'Understanding the karmic implications of Rahu and Ketu in your chart.',
    duration: '47 mins',
    students: '2.2K',
    rating: 4.7,
    level: 'Advanced',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop,trim=0;1043.4522821576763;0;697.6929460580913/A3QlKPKKE7ulbQOy/img_9143-mxB21LNaoOSRk9jZ.JPG'
  },
  {
    id: 18,
    title: 'Prashna Astrology - Horary Questions',
    description: 'Learn to answer specific questions using horary astrology techniques.',
    duration: '35 mins',
    students: '1.8K',
    rating: 4.6,
    level: 'Advanced',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop,trim=0;1043.4522821576763;0;697.6929460580913/A3QlKPKKE7ulbQOy/img_9143-mxB21LNaoOSRk9jZ.JPG'
  },
  {
    id: 19,
    title: 'Crystal Healing & Chakra Balancing',
    description: 'Combine astrology with crystal healing for powerful energy work.',
    duration: '40 mins',
    students: '2.7K',
    rating: 4.8,
    level: 'Beginner',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop,trim=0;1043.4522821576763;0;697.6929460580913/A3QlKPKKE7ulbQOy/img_9143-mxB21LNaoOSRk9jZ.JPG'
  },
  {
    id: 20,
    title: 'Building Your Astrology Practice',
    description: 'Complete guide to starting and growing your professional astrology practice.',
    duration: '55 mins',
    students: '3.4K',
    rating: 4.9,
    level: 'Intermediate',
    videoId: 'dQw4w9WgXcQ',
    thumbnail: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop,trim=0;1043.4522821576763;0;697.6929460580913/A3QlKPKKE7ulbQOy/img_9143-mxB21LNaoOSRk9jZ.JPG'
  }
];

const CoursesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Astrology <span className="text-gradient-gold">Courses</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master the ancient science of Vedic astrology with our comprehensive video courses. 
            Learn from traditional teachings and practical applications.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-divine transition-divine bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/20 overflow-hidden">
              <div className="relative">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-divine"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-divine flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-5 h-5 text-white ml-1" />
                  </div>
                </div>
                <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                  {course.level}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary-light text-primary-foreground transition-divine">
                  Watch Course
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-divine p-8 rounded-2xl shadow-divine max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
              Ready to Master Astrology?
            </h3>
            <p className="text-white/90 mb-6">
              Join thousands of students learning authentic Vedic astrology. 
              Get lifetime access to all courses with our premium membership.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold transition-divine">
              Get Premium Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
