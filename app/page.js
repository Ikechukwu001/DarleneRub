import DisclaimerModal from '@/components/DisclaimerModal';
import Hero from '../components/Hero';
import KnowMe from '@/components/KnowMe';
import ServicesSection from '@/components/ServiceSection';
import ReviewCarousel from '@/components/Reviews';

export default function Home() {
  return (
    <div className="w-full">
      <DisclaimerModal />
      <Hero />
      <KnowMe />
      <ServicesSection />
      <ReviewCarousel />
    </div>
  );
}
