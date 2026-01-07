import Header from "@/componets/Header/Header";
import Hero from "@/componets/Hero/Hero";
import Gallery from "@/componets/Gallery/Gallery";
import Booking from "@/componets/Booking/Booking";
import Pricing from "@/componets/Pricing/Pricing";
import Aftercare from "@/componets/Aftercare/Aftercare";
import Footer from "@/componets/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Gallery />
      <Pricing />
      <Booking />
      <Aftercare />
      <Footer />
    </>
  );
}