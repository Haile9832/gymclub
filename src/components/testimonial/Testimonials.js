import React, { useEffect, useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import "./Testimonials.css";

function Testimonials({ testimonialsData }) {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  function handleLeftClick() {
    selected === 0 ? setSelected(tLength - 1) : setSelected(selected - 1);
  }
  function handleRightClick() {
    selected === tLength - 1 ? setSelected(0) : setSelected(selected + 1);
  }
  {
    /*Scroll animation */
  }
  useEffect(() => {
    const handleScroll = () => {
      const backSquare1 = document.querySelector(".back-square1");
      const backSquare1Top = backSquare1.getBoundingClientRect().top;
      const backSquare1Bottom = backSquare1.getBoundingClientRect().bottom;
      const backSquare2 = document.querySelector(".back-square2");
      const testimonialDetais = document.querySelector(".left-t");
      if (backSquare1Top < window.innerHeight && backSquare1Bottom > 0) {
        backSquare1.classList.add("active");
        backSquare2.classList.add("active");
        testimonialDetais.classList.add("active");
      } else {
        backSquare1.classList.remove("active");
        backSquare2.classList.remove("active");
        testimonialDetais.classList.remove("active");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  {
    /*Scroll show arrows */
  }
  useEffect(() => {
    const handleScroll = () => {
      const arrows = document.querySelector(".arrows");
      const arrowsTop = arrows.getBoundingClientRect().top;
      const arrowsBottom = arrows.getBoundingClientRect().bottom;
      if (arrowsTop < window.innerHeight && arrowsBottom > 0) {
        arrows.classList.add("active");
      } else {
        arrows.classList.remove("active");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>Say about us</span>
        {testimonialsData.map((data, index) => (
          <div
            key={index}
            className={`infor ${index === selected ? "active" : ""}`}
          >
            {index === selected && (
              <>
                <span className="data-review">{data.review}</span>
                <span style={{ color: "var(--orange)" }}>
                  {data.name} - {data.status}
                </span>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="right-t">
        <div className="back-square1"></div>
        <div className="back-square2"></div>
        {testimonialsData.map((data, index) => (
          <div
            key={index}
            className={`testimonials-img ${index === selected ? "active" : ""}`}
          >
            {index === selected && (
              <>
                <img src={data.image} alt={data.name} />
              </>
            )}
          </div>
        ))}
        <div className="arrows">
          <img onClick={() => handleLeftClick()} src={leftArrow} />
          <img onClick={() => handleRightClick()} src={rightArrow} />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
