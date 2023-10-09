import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrow";
import homePageSlideImages from "./SliderImage";
import "./slider.css";

const len =  homePageSlideImages.length - 1;

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      <div className="slider-container" style={{with:"100%"}}  >
      <SliderContent style={{with:"100%"}} activeIndex={activeIndex}  homePageSlideImages={ homePageSlideImages} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
         homePageSlideImages={ homePageSlideImages}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
 
    </>
  
  );
}

export default Slider;