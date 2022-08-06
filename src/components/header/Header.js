import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import "./Header.css";
import { useEffect, useState } from "react";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [mobileWidth, setmobileWidth] = useState();
  const mobile = mobileWidth <= 768 ? true : false;
  useEffect(() => {
    const handleResize = () => {
      setmobileWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };  
  }, []);
  const handleOpenMenu = () => {
    setMenuOpened(!menuOpened);
  };
  console.log(mobileWidth, menuOpened)
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
          <img src={Bars} style={{ width: "1.5rem", height: "1.5rem" }} />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={handleOpenMenu}>Home</li>
          <li onClick={handleOpenMenu}>Programs</li>
          <li onClick={handleOpenMenu}>Why us</li>
          <li onClick={handleOpenMenu}>Plans</li>
          <li onClick={handleOpenMenu}>Testimonials</li>
        </ul>
      )}
    </div>
  );
}
export default Header;
