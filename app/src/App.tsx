import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FeaturedProducts from './components/FeaturedProducts';
import Statistics from './components/Statistics';
import ProcessTimeline from './components/ProcessTimeline';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Partners from './components/Partners';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedProducts />
        <Statistics />
        <ProcessTimeline />
        <Gallery />
        <Testimonials />
        <Blog />
        <Partners />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
