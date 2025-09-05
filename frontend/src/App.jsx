import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import ContactPage from "./Contact/ContactPage";
import ServicePage from "./Service/ServicePage";
import ReviewPage from "./Review/ReviewPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/reviews" element={<ReviewPage />} />
      </Routes>
    </Router>
  )
}

export default App;
