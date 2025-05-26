import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import KeyIssuesSection from './components/KeyIssuesSection';
import FeaturesSection from './components/FeaturesSection';
import BenefitsSection from './components/BenefitsSection';
import UserJourneySection from './components/UserJourneySection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';

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
      {/* Rest of the page content will go here */}
    </main>
  );
}
