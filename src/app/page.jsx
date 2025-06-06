import HeroSection from './components/HeroSection';
import KeyIssuesSection from './components/KeyIssuesSection';
import FeaturesSection from './components/FeaturesSection';
import BenefitsSection from './components/BenefitsSection';
import UserJourneySection from './components/UserJourneySection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <HeroSection />
      <KeyIssuesSection />
      <FeaturesSection />
      <BenefitsSection />
      <UserJourneySection />
      <CTASection />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
} 