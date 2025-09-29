import Navigation from '@/components/Navigation';
import CoursesSection from '@/components/CoursesSection';
import Footer from '@/components/Footer';

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <CoursesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Courses;