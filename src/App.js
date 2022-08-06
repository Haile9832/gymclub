import { programsData } from "./data/programsData";
import { plansData } from "./data/plansData";
import { testimonialsData } from "./data/testimonialsData";
import Hero from "./components/hero/Hero";
import Programs from "./components/program/Programs";
import Reasons from "./components/reason/Reasons";
import Plans from "./components/plan/Plans";
import Testimonials from "./components/testimonial/Testimonials";
import Join from "./components/join/Join";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs programsData={programsData} />
      <Reasons />
      <Plans plansData={plansData} />
      <Testimonials testimonialsData={testimonialsData} />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
