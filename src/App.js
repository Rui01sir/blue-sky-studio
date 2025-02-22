import './App.css';
import 'animate.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/page/HomePage';
import Link from './components/page/Link';
// import LoveCard from './components/page/LoveCard';
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
        {/* 條件渲染 Loading 或 HomePage 組件 */}
        <Route 
          path="/" 
          element={
            isLoading ? (
              <Loading onLoadingFinish={handleLoadingFinish} />
            ) : (
              <HomePage />
            )
          } 
        />
        <Route 
          path="Link/" 
          element={
            isLoading ? (
              <Loading onLoadingFinish={handleLoadingFinish} />
            ) : (
              <Link />
            )
          } 
        />
        {/* 其他路由 */}
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
      <TopButton />
      {!isLoading && <Footer />}
    </Router>
  );
}

export default App;
