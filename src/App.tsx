import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import EssentialTools from "./components/EssentialTools";
import Work from "./components/Work";
import './index.css';
import Reviews from "./components/Reviews";
import Contact from "./components/contact";
import Footer from "./components/Footer";


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Hero />
        <About />
        <EssentialTools />
        <Work />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </BrowserRouter>
  );
}
