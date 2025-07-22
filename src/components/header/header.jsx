import logoPortfolio from "../../../public/Portfolio.webp";
import "./_header.scss";

function header() {
  return (
    <>
      <header>
        <div className="header-layout">
          <img src={logoPortfolio} alt="Logo Portfolio Axel Cella" rel="preload"/>
        </div>
        <div className="thphr">
          <h1>
            Tout problème a sa solution <br />
            Chaque ligne de code y contribue
          </h1>
        </div>
      </header>
    </>
  );
}

export default header;
