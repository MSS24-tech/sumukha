import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import "./App.css";
import Header from "./component/header";
import Hero from "./component/heroSection";
import About from "./component/aboutSection";
import ServicesSection from "./component/serviceSection";
import LatestWork from "./component/projectSection";
import HowWeDo from "./component/creativeSection";
import WorkProcess from "./component/workProcess";
import TestimonialSlider from "./component/clientFeedback";
import TeamSection from "./component/ourTeam";
import ContactSection from "./component/contactUs";
import BlogSection from "./component/blogSection";
import BlogUpload from "./component/blogupload";
import Footer from "./component/footer";
import LoadImage from "./assets/image/popupImage.webp";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const scrollYRef = useRef(0);

  // Show popup once on homepage load
  useEffect(() => {
    setShowPopup(true);
  }, []);

  // Lock/unlock background scroll when popup is open
  useEffect(() => {
    if (showPopup) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = scrollYRef.current;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [showPopup]);

  return (
    <Router>
      <Routes>
        {/* Main homepage */}
        <Route
          path="/"
          element={
            <div className="App">
              <Header />

              <section className="section-container" id="hero">
                <Hero />
              </section>

              <section className="section-container" id="about">
                <About />
              </section>

              <section className="section-container" id="services">
                <ServicesSection />
              </section>

              <section className="section-container" id="how-we-do">
                <HowWeDo />
              </section>

              <section className="section-container" id="work-process">
                <WorkProcess />
              </section>

              <section className="section-container" id="contact">
                <ContactSection />
              </section>

              <section className="section-container" id="blog">
                <BlogSection />
              </section>

              <Footer />

              {/* Popup Component */}
              {showPopup && (
                <div
                  className="popup-overlay"
                  onClick={() => setShowPopup(false)}
                >
                  <div
                    className="popup-box"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close button */}
                    <button
                      className="popup-close"
                      onClick={() => setShowPopup(false)}
                    >
                      &times;
                    </button>

                    <img
                      src={LoadImage}
                      alt="Popup"
                      className="popup-image-full"
                    />
                  </div>
                </div>
              )}
            </div>
          }
        />

        {/* Blog Upload route WITHOUT header, footer, or popup */}
        <Route
          path="/blog-upload"
          element={
            <div className="App">
              <BlogUpload />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
