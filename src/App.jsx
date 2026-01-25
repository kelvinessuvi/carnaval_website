import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import CarnivalGroupsSection from './components/CarnivalGroupsSection';
import ParticipationInfoSection from './components/ParticipationInfoSection';
import EventScheduleSection from './components/EventScheduleSection';
import SafetyTipsSection from './components/SafetyTipsSection';
import FAQSection from './components/FAQSection';
import PartnersSection from './components/PartnersSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <main className="app-main">
      <Navbar />
      <Hero />
      <AboutSection />
      <StatsSection />
      <CarnivalGroupsSection />
      <ParticipationInfoSection />
      <EventScheduleSection />
      <SafetyTipsSection />
      <FAQSection />
      <PartnersSection />
      <FinalCTASection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}

export default App;
