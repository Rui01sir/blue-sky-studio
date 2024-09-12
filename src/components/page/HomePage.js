import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  useEffect(() => {
    const boxes = document.querySelectorAll('.homepage-banner__text, .homepage-banner__img, .homepage-text h4');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`正在动画: ${entry.target.className}`);
                
                if (entry.target.classList.contains('homepage-banner__text')) {
                    entry.target.classList.add('animate__slideInLeft');
                } else if (entry.target.classList.contains('homepage-banner__img')) {
                    entry.target.classList.add('animate__fadeInUp');
                } else if (entry.target.classList.contains('homepage-text h4')) {
                    entry.target.classList.add('animate__fadeInUp');
                }
                entry.target.classList.add('animate__animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    boxes.forEach(box => {
        observer.observe(box);
    });
  }, []);

  const navigate = useNavigate();

  const handleClick = (path) => {
      navigate(path);
  };

  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className='homepage-container'>
        <div className='homepage-banner'>
          <div className='homepage-banner__text'>
            <h1>青空設計</h1>
            <h4>是一家專注於 #創新設計<br/>#行銷策略的專業設計公司</h4>
          </div>
          <div className='homepage-banner__img'>
             <img src={`${process.env.PUBLIC_URL}/img/homepage-banner.png`} alt="homepage-banner"></img>
          </div>
        </div>
        <div className='homepage-text'>
          <h4>我們的核心服務包括  #平面設計 #網頁設計 #行銷策略<br/>
          我們的目標是為客戶提供全方位的品牌體驗，從概念到實現，助力品牌成長與成功。</h4>
        </div>
      </div>
    </div>
  );
}

export default HomePage;