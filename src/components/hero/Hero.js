import Header from "../header/Header";
import LoginModal from "../loginModal/LoginModal";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import AnimatedNumber from "animated-number-react";
import "./Hero.css";
import { useEffect, useState } from "react";

function Hero() {
  const [numCount, setNumCount] = useState(true);
  const [isModalShow, setIsModalShow] = useState(false);

  /*Scroll Animation */

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setNumCount(false);
      } else {
        setNumCount(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*Show Modal */

  const handleShowModal = () => {
    setIsModalShow(!isModalShow);
  };

  /*Hide Modal */

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsModalShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero" id="home">
      {isModalShow && (
        <LoginModal
          handleShowModal={handleShowModal}
          isModalShow={isModalShow}
        />
      )}
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/*The best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>The best fitness club in the town</span>
        </div>

        {/*Hero heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/*Hero figures*/}
        <div className="figures">
          <div>
            <span>
              +
              {(numCount && (
                <AnimatedNumber
                  value={140}
                  duration={3000}
                  formatValue={(n) => n.toFixed(0)}
                />
              )) ||
                140}
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              +
              {(numCount && (
                <AnimatedNumber
                  value={978}
                  duration={3000}
                  formatValue={(n) => n.toFixed(0)}
                />
              )) ||
                978}
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              +
              {(numCount && (
                <AnimatedNumber
                  value={50}
                  duration={3000}
                  formatValue={(n) => n.toFixed(0)}
                />
              )) ||
                50}
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/*Hero button*/}

        <div className="hero-btn">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/*right-h*/}

      <div className="right-h">
        {!isModalShow && (
          <button className="btn" onClick={handleShowModal}>
            Join Now
          </button>
        )}
        {!isModalShow && (
          <div className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>123 bpm</span>
          </div>
        )}
        {
          <img
            src={hero_image}
            alt=""
            className={`hero-image ${isModalShow ? "active" : ""}`}
          />
        }
        <img src={hero_image_back} alt="" className="hero-image-back" />
      </div>

      {/*Hero Image*/}

      {/*Calories*/}

      {!isModalShow && (
        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
