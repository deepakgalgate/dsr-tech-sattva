import Header from "./components/Header";
import Hero from "./components/Hero";
import WhoItsFor from "./components/WhoItsFor";
import Curriculum from "./components/Curriculum";
import Schedule from "./components/Schedule";
import Outcomes from "./components/Outcomes";
import Faq from "./components/Faq";
import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoItsFor />
        <Curriculum />
        <Schedule />
        <Outcomes />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
