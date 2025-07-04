import "./_nav.scss";
import { Link } from "react-router-dom";
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
            <Link to="">
              <h4>Acceuil</h4>
            </Link>
            <Link to="">
              <h4>Projets</h4>
            </Link>
            <Link to="">
              <h4>Services</h4>
            </Link>
            <Link to="">
              <h4>A propos</h4>
            </Link>
          </div>
          <div className="connectButton">
            <button>Connectons-nous</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
