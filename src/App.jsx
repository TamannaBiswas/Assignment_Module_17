import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import Services from "./page/Services.jsx";
import Gallery from "./page/Gallery.jsx";
import Contact from "./page/Contact.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800">
      <Header />
      <WelcomeMessage />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
