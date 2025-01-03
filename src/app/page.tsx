
import HeroSection from "./components/hero";
import Products from "./products/page";
import ContactUs from "./contact/page";
import About from "./about/page";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Products/>
      <About/>
      <ContactUs/> 
    </div>
  )
}