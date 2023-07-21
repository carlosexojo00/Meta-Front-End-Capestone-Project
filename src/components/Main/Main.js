import HeroSection from "../HeroSection/HeroSection";
import HighLightsSection from "../HighlightsSection/HighlightsSection";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import AboutSection from "../AboutSection/AboutSection";

const Main = () => {
  return (
    <div className="flex-auto flex flex-col items-center justify-center">
      <HeroSection></HeroSection>
      <HighLightsSection></HighLightsSection>
      <TestimonialsSection></TestimonialsSection>
      <AboutSection></AboutSection>
    </div>
  )
}

export default Main;