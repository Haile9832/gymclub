import whiteTick from "../../assets/whiteTick.png";
import "./Plans.css";
import { useEffect } from "react";

function Plans({ plansData }) {
  /*Header animation */

  useEffect(() => {
    const handleScroll = () => {
      const plansHeader = document.querySelector(".plans-header");
      const plansHeaderTop = plansHeader.getBoundingClientRect().top;
      const plansHeaderBottom = plansHeader.getBoundingClientRect().bottom;
      if (plansHeaderTop < window.innerHeight && plansHeaderBottom > 0) {
        plansHeader.classList.add("active");
      } else {
        plansHeader.classList.remove("active");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*PlansCard animation */

  useEffect(() => {
    const handleScroll = () => {
      const plansCard = document.querySelectorAll(".plans");
      plansCard.forEach((plan) => {
        const planTop = plan.getBoundingClientRect().top;
        const planBottom = plan.getBoundingClientRect().bottom;
        if (planTop < window.innerHeight && planBottom > 0) {
          plan.classList.add("active");
        } else {
          plan.classList.remove("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="plans-header">
        <span className="stroke-text">ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now withus</span>
      </div>

      {/*Plans card*/}
      <div className="plans">
        {plansData.map((plan, index) => (
          <div className="plan" key={index}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="feature" key={index}>
                  <img src={whiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more Benefit </span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
