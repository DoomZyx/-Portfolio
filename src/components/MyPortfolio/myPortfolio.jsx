import { useRef, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import projects from "../../data/projects";
import "./_myportfolio.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


import kasaimg from "/public/kasa.png";
import LeMasimg from "/public/LeMasDuParadis1.png";
import space from "/public/space.jpg";

import node from "/public/stack/node.png";
import sql from "/public/stack/sqlite.png";
import mongodb from "/public/stack/mongodb.png";
import react from "/public/stack/react.png";
import sass from "/public/stack/sass.png";
import figma from "/public/stack/figma.png";

import ohmyfoodimg from "/public/ohmyfood1.png";

import character from "/public/character.png";
import IphoneViewer from "../../animation/models/iphone";

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

  const ohmyfood = projects.find((p) => p.title.fr === "Ohmyfood");
  const kasa = projects.find((p) => p.title.fr === "Kasa");
  const leMas = projects.find((p) => p.title.fr === "Le Mas Du Paradis Bleu");

  return (
    <>
      <h2 className="title-portfolio" id="portfolio">
        Mon portfolio
      </h2>

      <div className="container">
        <div className="containerThirst">
          <div className="kasa">
            <img src={kasaimg} alt="" />
            <div className="info-project">
              <h4>Kasa</h4>
              <Link smooth={true} to={`/project/${kasa.id}`}>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>

          <div className="leMas">
            <img src={LeMasimg} alt="" />
            <div className="info-project">
              <h4>Le Mas Du Paradis Bleu</h4>
              <Link smooth={true} to={`/project/${leMas.id}`}>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>

          <div className="Iphone3d" ref={containerRef}>
            <IphoneViewer
            />
          </div>
        </div>

        <div className="secondlayout">
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
            <img src={ohmyfoodimg} alt="" />
            <div className="info-project">
              <h4>Ohmyfood</h4>
              <Link smooth={true} to={`/project/${ohmyfood.id}`}>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>

          <div className="myself">
            <img src={character} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPortfolio;

// style={{
//               //   height: window.innerWidth < 768 ? "300px" : "500px", // condition pour mobile
//               //   width: window.innerWidth < 768 ? "100%" : "500px", // condition pour mobile
//               // }}
