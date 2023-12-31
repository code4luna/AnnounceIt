import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Carousel from './components/Carousel';
import VideoPage from './components/VideoPage';
import FAQPage from './components/FAQPage';
import PricingPage from './components/PricingPage';
import CreateAnnouncementPage from './components/CreateAnnouncementPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/pricingpage" element={<PricingPage />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/create" element={<CreateAnnouncementPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
