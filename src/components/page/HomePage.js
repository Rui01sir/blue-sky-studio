import React, { useRef,useEffect } from 'react';

function HomePage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const horizontalSection = container.querySelector('.horizontal-section');
      const horizontalWrapper = container.querySelector('.horizontal-wrapper');

      const horizontalStart = horizontalSection.offsetTop;
      const horizontalEnd = horizontalStart + horizontalWrapper.scrollWidth;

      if (window.scrollY >= horizontalStart && window.scrollY < horizontalEnd) {
        window.scrollTo(0, horizontalStart); // Fix vertical scroll position
        horizontalWrapper.style.transform = `translateX(-${window.scrollY - horizontalStart}px)`;
      } else {
        horizontalWrapper.style.transform = `translateX(0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="container">
      <section className="vertical-section">
        <div className="page">Page 1</div>
        <div className="page">Page 2</div>
      </section>

      <section className="horizontal-section">
        <div className="horizontal-wrapper">
          <div className="page">Page 3</div>
          <div className="page">Page 4</div>
          <div className="page">Page 5</div>
        </div>
      </section>

      <section className="vertical-section">
        <div className="page">Page 6</div>
        <div className="page">Page 7</div>
      </section>
    </div>
  );
}

export default HomePage;