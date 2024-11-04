export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Deals from "@/components/deals";
import Footer from "@/components/Footer";
import Hero from "@/components/hero-home";
import Pricing from "@/components/Pricing";



export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <Deals />
      <Footer />
      
    </>
  );
}
