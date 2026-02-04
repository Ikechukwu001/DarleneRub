import Hero from '../components/Hero';
import KnowMe from '@/components/KnowMe';
import ServicesSection from '@/components/ServiceSection';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <KnowMe />
      <ServicesSection />
    </div>
  );
}
