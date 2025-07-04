import { useRef, useEffect } from "react";
import "./_myportfolio.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Spline from "@splinetool/react-spline";

import kasa from "/public/kasa.png";
import LeMas from "/public/LeMasDuParadis1.png";
import space from "/public/space.jpg";

import node from "/public/stack/node.png";
import sql from "/public/stack/sqlite.png";
import mongodb from "/public/stack/mongodb.png";
import react from "/public/stack/react.png";
import sass from "/public/stack/sass.png";
import figma from "/public/stack/figma.png";

import ohmyfood from "/public/ohmyfood1.png";

import character from "/public/character.png";

function MyPortfolio() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e) => {
      e.preventDefault();
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <h2 className="title-portfolio">Mon portfolio</h2>

      <div className="layoutgrid">
        <div className="kasa">
          <img src={kasa} alt="" />
          <div className="info-project">
            <h4>Kasa</h4>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        <div className="leMas">
          <img src={LeMas} alt="" />
          <div className="info-project">
            <h4>Le Mas Du Paradis Bleu</h4>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        <div className="Iphone3d" ref={containerRef}>
          <Spline
            className="iphone"
            scene="https://prod.spline.design/ddMWGaWGSLLGgFdz/scene.splinecode"
          />
        </div>

        <div className="space">
          <img src={space} alt="" />
        </div>

        <div className="layout-stack">
          <div className="thirstrangest">
          <img className="nodejs" src={node} alt="" />
          <img className="sql" src={sql} alt="" />
          <img className="mongodb" src={mongodb} alt="" />
          </div>
          <div className="secondrangest">
          <img className="react" src={react} alt="" />
          <img className="sass" src={sass} alt="" />
          <img className="figma" src={figma} alt="" />
          </div>
        </div>

        <div className="ohmyfood">
          <img src={ohmyfood} alt="" />
          <div className="info-project">
            <h4>Ohmyfood</h4>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        <div className="myself">
          <img src={character} alt="" />
        </div>
      </div>
    </>
  );
}

export default MyPortfolio;
