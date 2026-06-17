import Navbar from '../components/siclub/Navbar';
import Hero from '../components/siclub/Hero';
import TargetAudience from '../components/siclub/TargetAudience';
import HowItWorks from '../components/siclub/HowItWorks';
import Services from '../components/siclub/Services';
import ClientResults from '../components/siclub/ClientResults';
import Team from '../components/siclub/Team';
import Partners from '../components/siclub/Partners';
import FinalCTA from '../components/siclub/FinalCTA';
import Footer from '../components/siclub/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <main>
        <Hero />
        <TargetAudience />
        <HowItWorks />
        <Services />
        <ClientResults />
        <Team />
        <FinalCTA />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}