import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import Navbar from "./components/Navbar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import ResumeChatBot from "./components/ResumeChatBot.jsx";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <ShowcaseSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Contact />
      <Footer />
      <ResumeChatBot />
    </main>
  );
}

export default App;
