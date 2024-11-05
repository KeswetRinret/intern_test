export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Deals from "@/components/Deals";
import Footer from "@/components/Footer";
import Future from "@/components/Future";
import Hero from "@/components/hero-home";
import Pricing from "@/components/Pricing";



export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <Deals />
      <Future />
      <Footer />
      
    </>
  );
}
