import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrow";
import homePageSlideImages from "./SliderImage2";
import "./slider.css";

const len =  homePageSlideImages.length - 1;

function Slider2() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      <div className="slider-container" style={{marginTop:"0.5rem",borderTop:"3px solid #f7f7f7"}}  >
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

export default Slider2;