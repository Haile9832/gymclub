import "./Programs.css";
import RightArrow from "../../assets/rightArrow.png";
import { useEffect, useState } from "react";

function Programs({ programsData }) {
  const [currentActive, setCurrentActive] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const programsHeader = document.querySelector(".programs-header");
      const programsHeaderTop = programsHeader.getBoundingClientRect().top;
      const programsHeaderBottom =
        programsHeader.getBoundingClientRect().bottom;
      if (programsHeaderTop < window.innerHeight && programsHeaderBottom > 0) {
        programsHeader.classList.add("active");
      } else {
        programsHeader.classList.remove("active");
      }

      const programsCategory = document.querySelector(".programs-category");
      const programsCategoryTop = programsCategory.getBoundingClientRect().top;
      const programsCategoryBottom =
        programsCategory.getBoundingClientRect().bottom;
      if (
        programsCategoryTop < window.innerHeight &&
        programsCategoryBottom > 0
      ) {
        programsCategory.classList.add("active");
      } else {
        programsCategory.classList.remove("active");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentActive(currentActive + 1);
    }, 3000);
    if (currentActive === programsData.length) {
      setCurrentActive(0);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [currentActive]);
  return (
      <div className="programs" id="programs">
        <div className="programs-header">
          <span className="stroke-text">explore our</span>
          <span>programs</span>
          <span className="stroke-text">to shape you</span>
        </div>
        <div className="programs-category">
          {programsData.map((programData, index) => (
            <div
              className={`category ${currentActive === index ? "active" : ""}`}
              key={index}
            >
              {programData.image}
              <span>{programData.heading}</span>
              <span>{programData.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} />
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Programs;
