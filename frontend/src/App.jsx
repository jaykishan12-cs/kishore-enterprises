import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import ContactPage from "./Contact/ContactPage";
import ServicePage from "./Service/ServicePage";
import ReviewPage from "./Review/ReviewPage";
import Navbar from "./Navbar"
import Footer from "./Footer"

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/reviews" element={<ReviewPage />} />
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App;
