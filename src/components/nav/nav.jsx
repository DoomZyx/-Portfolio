import "./_nav.scss";
import { HashLink } from "react-router-hash-link";
import Me from "/public/me.png";

function Nav() {
  return (
    <>
      <nav>
        <div className="nav-layout">
          <div className="myProfile">
            <img className="pictureOfMyself" src={Me} alt="" />
            <h4>Axel</h4>
          </div>
          <div className="links">
            <HashLink smooth={true} to="/">
            Acceuil
            </HashLink>
            <HashLink smooth={true} to="/#portfolio">
              Portfolio
            </HashLink>
            <HashLink smooth={true} to="/#services">
              Services
            </HashLink>
            <HashLink smooth={true} to="/#about">
              A propos
            </HashLink>
          </div>
          <HashLink smooth={true} to="/#contact">
            <div className="connectButton">
              <button>Connectons-nous</button>
            </div>
          </HashLink>
        </div>
      </nav>
    </>
  );
}

export default Nav;
