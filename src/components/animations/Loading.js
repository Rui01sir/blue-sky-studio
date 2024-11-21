import React, { useEffect,useState} from 'react';

const Loading = ({ Component, onLoadingFinish }) => {
  const [isSlideUp, setIsSlideUp] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsSlideUp(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      onLoadingFinish();
    }, 3300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onLoadingFinish]);

  return (
    <div className="loading-container">
          <div className={`svg-container ${isSlideUp ? 'slideUp' : ''}`}>
          <div className="svg-container__top">
            <img
              src={`${process.env.PUBLIC_URL}/img/Group-10.svg`}
              alt="Group-10-logo"
              className="loading-svg"
            />
          </div>
          <div className="svg-container__buttom">
            <img
              src={`${process.env.PUBLIC_URL}/img/Group-11.svg`}
              alt="Group-11-logo"
              className="loading-svg"
            />
          </div>
        </div>
    </div>
  );
};

export default Loading;
