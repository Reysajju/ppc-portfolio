import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import GoogleAdsManagement from './pages/services/GoogleAdsManagement';
import PPCAnalytics from './pages/services/PPCAnalytics';
import EcommercePPC from './pages/case-studies/EcommercePPC';
import GoogleAdsStrategies from './pages/blog/GoogleAdsStrategies';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/google-ads-management" element={<GoogleAdsManagement />} />
          <Route path="/services/ppc-analytics" element={<PPCAnalytics />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/ecommerce-ppc" element={<EcommercePPC />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/google-ads-strategies" element={<GoogleAdsStrategies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <footer className="py-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;