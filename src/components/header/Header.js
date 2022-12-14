import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import "./Header.css";
import { useState } from "react";
import { Link } from "react-scroll";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const mobile = window.innerWidth < 768 ? true : false;
  const handleOpenMenu = () => {
    setMenuOpened(!menuOpened);
  };
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={handleOpenMenu}
        >
          <img src={Bars} style={{ width: "1.5rem", height: "1.5rem" }} alt=""/>
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link to="home" spy={true} smooth={true} onClick={handleOpenMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              spy={true}
              smooth={true}
              onClick={handleOpenMenu}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="reasons"
              spy={true}
              smooth={true}
              onClick={handleOpenMenu}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link to="plans" spy={true} smooth={true} onClick={handleOpenMenu}>
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              onClick={handleOpenMenu}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
export default Header;
