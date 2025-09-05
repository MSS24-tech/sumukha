import logo from "./logo.svg";
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
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <ServicesSection />
      <LatestWork />
      <HowWeDo />
      <WorkProcess />
      {/* <TestimonialSlider /> */}
      {/* <TeamSection /> */}
      <ContactSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
