import Hero from '../Components/Hero';
import KnowMe from '@/Components/KnowMe';
import ServicesSection from '@/Components/ServiceSection';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <KnowMe />
      <ServicesSection />
    </div>
  );
}
