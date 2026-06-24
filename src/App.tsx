import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./routes/index";
import About from "./routes/about";
import Services from "./routes/services";
import Gallery from "./routes/gallery";
import Reviews from "./routes/reviews";
import Warranty from "./routes/warranty";
import Contact from "./routes/contact";
import NotFound from "./routes/not-found";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
