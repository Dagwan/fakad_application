// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/OurServices';
import Training from './pages/Training';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/ContactUs';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ThankYou from './pages/ThankYou';
import CreateAccount from './pages/CreateAccount';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-services" element={<Services />} />
            <Route path="/training" element={<Training />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes> 
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;