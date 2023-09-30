import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { TurboCharger, Image1, Image2, Image3, Image4, Image5, Image6} from "../Assets";

const Imagecarousel = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let observer;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Adjust if needed
    };

    function handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sliderRef.current.slickPlay();
        } else {
          sliderRef.current.slickPause();
        }
      });
    }

    if (containerRef.current) {
      observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const settings = {
    // ... other settings ...
    autoplay: true,
    autoplaySpeed: 3000,
    ref: sliderRef,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div ref={containerRef} className="carousel-container">
      <Slider {...settings}>
        <div className={`transform scale-90 transition-all duration-300 ${currentSlide === 0 ? 'opacity-100' : 'opacity-10'} hover:opacity-100 hover:scale-100 flex flex-col items-center`}>
          <img src={TurboCharger} alt="Description 1"  className="w-[380px] h-[250px] object-cover object-center mb-2" />
          <p className="text-center text-sm font-poppins">Turbo charger</p>
        </div>
        <div className={`transform scale-90 transition-all duration-300 ${currentSlide === 1 ? 'opacity-100' : 'opacity-10'} hover:opacity-100 hover:scale-100`}>
          <img src={Image1} alt="Description 2" className="w-[380px] h-[250px] object-cover object-center"/>
        </div>
        <div className={`transform scale-90 transition-all duration-300 ${currentSlide === 2 ? 'opacity-100' : 'opacity-10'} hover:opacity-100 hover:scale-100`}>
          <img src={Image2} alt="Description 3" className="w-[380px] h-[250px] object-cover object-center"/>
        </div>
        <div className={`transform scale-90 transition-all duration-300 ${currentSlide === 3 ? 'opacity-100' : 'opacity-10'} hover:opacity-100 hover:scale-100`}>
          <img src={Image3} alt="Description 3" className="w-[380px] h-[250px] object-cover object-center" />
        </div>
        <div className={`transform scale-90 transition-all duration-300 ${currentSlide === 4 ? 'opacity-100' : 'opacity-10'} hover:opacity-100 hover:scale-100`}>
          <img src={Image4} alt="Description 3" className="w-[380px] h-[250px] object-cover object-center"/>
        </div>
        <div className={`transform scale-90 transition-all duration-300 ${currentSlide === 5 ? 'opacity-100' : 'opacity-10'} hover:opacity-100 hover:scale-100`}>
          <img src={Image5} alt="Description 3" className="w-[380px] h-[250px] object-cover object-center"/>
        </div>
        <div className={`transform scale-90 transition-all duration-300 ${currentSlide === 6 ? 'opacity-100' : 'opacity-10'} hover:opacity-100 hover:scale-100`}>
          <img src={Image6} alt="Description 3" className="w-[380px] h-[250px] object-cover object-center"/>
        </div>
        {/* ... other images ... */}
      </Slider>
    </div>
  );
};

export default Imagecarousel;
