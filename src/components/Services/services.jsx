import ShapeshifterViewer from "../../animation/models/shapeshifter";
import "./_services.scss";

function MyServices() {
  return (
    <>
      <h2 className="title-services">Mes services</h2>
      <div className="box-services">
        <ShapeshifterViewer />
        <div className="layout-services">
          <div className="services">
            <h4>Landing Page</h4>
          </div>
          <div className="services">
            <h4>Site E-commerce</h4>
          </div>
          <div className="services">
            <h4>Application Web</h4>
          </div>
          <div className="services">
            <h4>Portfolio</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyServices;
