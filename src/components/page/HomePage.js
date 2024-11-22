import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import 'animate.css';

export const HomepageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomepageBanner = styled.div`
  width: 83.3333%;
  height: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;

  @media (max-width: 1200px) {
    height: 100%;
    flex-direction: column;
    margin-top: 2%;
    position: relative;
  }

  @media (max-width: 765px) {
    margin-top: 0px;
  }
`;

export const HomepageBannerText = styled.div`
  width: 615px;
  height: 545px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-right: 66px;

  @media (max-width: 1200px) {
    width: 83.3333%;
    height: 90%;
    margin-right: 0;
    position: absolute;
    z-index: 1;
  }
`;

export const HomepageBannerImage = styled.div`
  width: 920px;
  height: 650px;
  overflow: hidden;
  position: relative;
  border-radius: 30px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 1200px) {
    width: 100%;
    height: 650px;
  }
`;

export const HomepageText = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFB;

  h4 {
    width: 70%;
    color: #374863;
    text-align: center;
  }

  @media (max-width: 1200px) {
    h4 {
      font-size: 28px;
    }
  }

  @media (max-width: 765px) {
    height: 60%;
    padding-bottom: 10%;
    h4 {
      font-size: 16px;
      color: #374863;
      text-align: center;
    }
  }
`;

export const HomepageBannerTextH1 = styled.h1`
  @media (max-width: 1200px) {
    font-size: 40px;
    color: #374863;
    margin-top: 5%;
  }
`;

export const HomepageBannerTextH4 = styled.h4`
  @media (max-width: 1200px) {
    font-size: 28px;
    color: #374863;
  }

  @media (max-width: 765px) {
    font-size: 16px;
    color: #374863;
  }
`;

function HomePage() {
  useEffect(() => {
    const boxes = document.querySelectorAll(
      '.homepage-banner__text, .homepage-banner__img, .homepage-text'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`動畫觸發: ${entry.target.className}`);
            
            if (entry.target.classList.contains('homepage-banner__text')) {
              entry.target.classList.add('animate__slideInLeft');
            } else if (entry.target.classList.contains('homepage-banner__img')) {
              entry.target.classList.add('animate__fadeInUp');
            } else if (entry.target.classList.contains('homepage-text')) {
              entry.target.classList.add('animate__fadeInUp');
            }
            entry.target.classList.add('animate__animated');
            observer.unobserve(entry.target); // 停止觀察已觸發動畫的元素
          }
        });
      },
      { threshold: 0.5 }
    );

    boxes.forEach((box) => observer.observe(box));
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
      <HomepageContainer>
          <div className="background-container">
            <img
              src={`${process.env.PUBLIC_URL}/img/banner-circul.svg`}
              alt="homepage-banner-circul"
            />
          </div>
        <HomepageBanner>
          <HomepageBannerText className="homepage-banner__text">
            <HomepageBannerTextH1>青空設計</HomepageBannerTextH1>
            <HomepageBannerTextH4>
              是一家專注於 #創新設計<br />
              #行銷策略的專業設計公司
            </HomepageBannerTextH4>
          </HomepageBannerText>
          <HomepageBannerImage className="homepage-banner__img">
            <img
              src={`${process.env.PUBLIC_URL}/img/ak61a-aejcj.webp`}
              alt="homepage-banner"
            />
          </HomepageBannerImage>
        </HomepageBanner>
        <HomepageText>
          <h4 className="homepage-text">
            我們的核心服務包括 #平面設計 #網頁設計 #行銷策略<br />
            我們的目標是為客戶提供全方位的品牌體驗，從概念到實現，助力品牌成長與成功。
          </h4>
        </HomepageText>
      </HomepageContainer>
    </div>
  );
}

export default HomePage;