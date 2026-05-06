import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import CreativeGallery from '@/components/creativelib/CreativeGallery';
import DevSection from '@/components/dev/DevSection';
import RecordsSection from '@/components/records/RecordsSection';
import ContactCTA from '@/components/contact/ContactCTA';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CreativeGallery />
        <DevSection />
        <RecordsSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
