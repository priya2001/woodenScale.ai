import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CTA from './components/CTAsection'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      {/* <main> */}
        <Hero />
        <Journey />
        <Features />
        <Testimonials />
        <CTA />
      {/* </main> */}
      <Footer />
    </div>
  );
}