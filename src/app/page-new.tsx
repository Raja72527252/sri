import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import HouseDesigns from '@/components/HouseDesigns'
import SuccessStories from '@/components/SuccessStories'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import CustomBuild from '@/components/CustomBuild'
import BuilderInfo from '@/components/BuilderInfo'
import ContactInfo from '@/components/ContactInfo'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <HouseDesigns />
      <SuccessStories />
      <WhyChooseUs />
      <Testimonials />
      <CustomBuild />
      <BuilderInfo />
      <ContactInfo />
      <FAQ />
    </main>
  );
}
