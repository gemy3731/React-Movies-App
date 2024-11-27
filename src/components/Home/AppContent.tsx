import imageOne from "../../assets/images/imageOne.jpg";
import imageTwo from "../../assets/images/imageTwo.jpg";
import imageThree from "../../assets/images/imageThree.jpg";
import imageFour from "../../assets/images/imageFour.jpg";
import imageFive from "../../assets/images/imageFive.jpg";
import imageSix from "../../assets/images/imageSix.jpg";
import TVOne from "../../assets/images/TVOne.jpg";
import TVTwo from "../../assets/images/TVTwo.jpg";
import TVThree from "../../assets/images/TVThree.jpg";
import TVFour from "../../assets/images/TVFour.jpg";
import TVFive from "../../assets/images/TVFive.jpg";
import TVSix from "../../assets/images/TVSix.jpg";

export default function AppContent() {
  return (
    <div className="my-20 flex flex-col md:flex-row justify-evenly items-center gap-4">
      <div className="appContentCard ">
        <div className="image-slideshow">
          <img src={imageOne} alt="imageOne" />
          <img src={imageTwo} alt="imageTwo" />
          <img src={imageThree} alt="imageThree" />
          <img src={imageFour} alt="imageFour" />
          <img src={imageFive} alt="imageFive" />
          <img src={imageSix} alt="imageSix" />
        </div>
      </div>
      <div className="appContentTVCard">
        <div className="image-slideshow">
          <img src={TVOne} alt="imageOne" />
          <img src={TVTwo} alt="imageTwo" />
          <img src={TVThree} alt="imageThree" />
          <img src={TVFour} alt="imageFour" />
          <img src={TVFive} alt="imageFive" />
          <img src={TVSix} alt="imageSix" />
        </div>
      </div>
    </div>
  );
}
