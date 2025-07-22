import { Suspense, lazy } from "react";
const ShapeshifterViewer = lazy(() => import("../../animation/models/shapeshifter"))
import "./_services.scss";

function MyServices() {
  return (
    <>
      <h2 className="title-services" id="services">
        Mes services
      </h2>
      <div className="services-container">
        <div className="box-services">
          <Suspense fallback={<div>Chargement...</div>}>
          <ShapeshifterViewer />
          </Suspense>
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
      </div>
    </>
  );
}

export default MyServices;
