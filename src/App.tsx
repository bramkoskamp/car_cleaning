import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Reviews } from "./components/Reviews";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ReviewForm } from "./components/ReviewForm";
import { useState } from "react";

export default function App() {
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <About />
        <Services />
        <Process />
       
        <Contact />
        <Footer />
      </div>
       {/* <Reviews /> */}
    </>
  );
}