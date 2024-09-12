import React, { useEffect } from 'react';

const Loading = ({ Component, onLoadingFinish }) => {
  useEffect(() => {
    // 假設動畫時間為3秒，3秒後觸發 onLoadingFinish
    const timer = setTimeout(() => {
      onLoadingFinish();
    }, 3000); // 這個時間根據你的動畫時間進行調整

    return () => clearTimeout(timer);
  }, [onLoadingFinish]);

  return (
    <div className="loading-container">
    <div className="svg-container">
      <img src={`${process.env.PUBLIC_URL}/img/Group-10.svg`} alt="Group-10-logo" className="loading-svg"></img>
      <img src={`${process.env.PUBLIC_URL}/img/Group-11.svg`} alt="Group-11-logo" className="loading-svg"></img>
    </div>
  </div>
  );
};

export default Loading;
