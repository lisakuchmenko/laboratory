import CommonHeroSection from "../components/CommonHeroSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PageBlur } from "../components/PageBlur";

export default function ContactPage() {
  return (
    <div className="bg-[#1D1B20] min-h-screen max-w-screen pt-8 font-sportingGrotesque text-text overflow-x-hidden scroll-smooth">
      <Header />
      <PageBlur>
        <CommonHeroSection phrase={"Talk to us"} additional_phrase={"It's important to stay in touch"}/>
        <Footer />
      </PageBlur>
    </div>
  );
}
