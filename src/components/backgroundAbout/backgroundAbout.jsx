import "./_backgroundabout.scss";

import image1 from "/background/image1.png";
import image2 from "/background/image2.png";
import image3 from "/background/image3.png";
import image4 from "/background/image4.png";
import image5 from "/background/image5.png";
import image6 from "/background/image6.png";
import image7 from "/background/image7.png";
import image8 from "/background/image8.png";
import image9 from "/background/image9.png";
import image10 from "/background/image10.png";

function BackgroundABout() {
  return (
    <>
      <div className="background">
        <div className="thirstrange">
          <img className="img1" src={image1} alt="" />
          <img className="img2" src={image2} alt="" />
          <img className="img3" src={image3} alt="" />
          <img className="img4" src={image4} alt="" />
          <img className="img5" src={image5} alt="" />
          <img className="img6" src={image6} alt="" />
        </div>
        <div className="secondrange">
          <img className="img7" src={image7} alt="" />
          <img className="img8" src={image8} alt="" />
          <img className="img9" src={image9} alt="" />
          <img className="img10" src={image10} alt="" />
        </div>
      </div>
    </>
  );
}

export default BackgroundABout;
