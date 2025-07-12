import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Quote from './pages/Quote';
import Custom from './pages/Custom';
import WordPress from './pages/WordPress';
import WebApp from './pages/WebApp';
import Desktop from './pages/Desktop';
import Mobile from './pages/Mobile';
import Privacy from './pages/Privacy';
import BackToTop from './components/BackToTop';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/wordpress" element={<WordPress />} />
          <Route path="/webapp" element={<WebApp />} />
          <Route path="/desktop" element={<Desktop />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
      <CookieConsent /> 
    </div>
  );
}

export default App;