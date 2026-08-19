import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import Hero from "./components/Hero";
import Legacy from "./components/Legacy";
import Principles from "./components/Principles";
import Collection from "./components/Collection";
import Philosophy from "./components/Philosophy";
import Partners from "./components/Partners";
import Team from "./components/Team";
import ContactCta from "./components/ContactCta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <SmoothScroll>
        <main className="flex-1 bg-ink">
          <Hero />
          <Legacy />
          <Principles />
          <Collection />
          <Philosophy />
          <Partners />
          <Team />
          <ContactCta />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
