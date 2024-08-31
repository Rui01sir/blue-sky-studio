import './App.css';
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/page/HomePage';
import TopButton from './components/common/TopButton';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Loading from './components/animations/Loading';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingFinish = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      {!isLoading && <Navbar />}
      <Routes>
        <Route path="/" element={<Loading Component={HomePage} onLoadingFinish={handleLoadingFinish} />} />
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
      <TopButton />
      {!isLoading && <Footer />}
    </Router>
  );
}

export default App;