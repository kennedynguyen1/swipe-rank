import CTA from "../components/CTA"
import Header from "../components/Header"
import Testimonial from "../components/Testimonial"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Features from "../components/Features"
import HowItWorks from "../components/HowItWorks"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}