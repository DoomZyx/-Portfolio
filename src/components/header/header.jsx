import logoPortfolio from "../../../public/Portfolio.png";
import "./_header.scss"

function header() {
  return (
    <>
      <header>
        <div className="header-layout">
          <img src={logoPortfolio} alt="" />
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
