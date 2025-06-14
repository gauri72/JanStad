import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import KeyIssuesSection from './components/KeyIssuesSection';
import FeaturesSection from './components/FeaturesSection';
import BenefitsSection from './components/BenefitsSection';
import UserJourneySection from './components/UserJourneySection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <KeyIssuesSection />
      <FeaturesSection />
      <BenefitsSection />
      <UserJourneySection />
      <CTASection />
      <ContactSection />
      <ScrollToTopButton />
      {/* Rest of the page content will go here */}
    </main>
  );
}
