import React, { useState, useEffect, useRef } from "react";


const featuredProducts = [
    'https://assets-in.bmscdn.com/discovery-catalog/events/et00324772-dutbmystfx-portrait.jpg',
    'https://assets-in.bmscdn.com/discovery-catalog/events/et00133391-xbqyscqxla-portrait.jpg',
    'https://assets-in.bmscdn.com/discovery-catalog/events/et00301319-fqkfmnuetg-portrait.jpg',
    'https://assets-in.bmscdn.com/discovery-catalog/events/et00321597-ajtmgmkwqw-portrait.jpg',
    'https://assets-in.bmscdn.com/discovery-catalog/events/et00056556-dtqxqbeluj-portrait.jpg',
    'https://assets-in.bmscdn.com/discovery-catalog/events/et00122526-uasbnjfkld-portrait.jpg',
    
      
]
let count = 0;
let slideInterval;

function Stream() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 7000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="w-auto select-none relative  ">
      <div className=" aspect-w-1/3 aspect-h-5   md:aspect-w-2/3 md:aspect-h-9 ">
        <img src={featuredProducts[currentIndex]} alt=""  className="w-1/3 h-2/3 "/>
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-50 transition"
          onClick={handleOnPrevClick}
        >
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-50 transition"
          onClick={handleOnNextClick}
        >
         <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}

export default  Stream;