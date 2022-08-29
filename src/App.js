import "./App.css";
import { Navbar, Footer } from "./components";
// import {Home} from './pages';
import Home from "./pages/home/Home";
import Privacypolicy from "./pages/privacy-policy/Privacy_policy";
import TermsConditions from "./pages/terms-conditions/Terms_conditions";
import Contactus from "./pages/contactus/Contactus";
import About from "./pages/about/About";
import { Switch, Routes, Route } from "react-router-dom";
import FixedBar from "./components/fixedbar/FixedBar";
import PageNotFound from "./pages/pagenotfound/PageNotFound";

function App() {
  return (
    <div>
      <FixedBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacypolicy />} />
        <Route path="/termsConditions" element={<TermsConditions />} />
        <Route path="/About" element={<About />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
