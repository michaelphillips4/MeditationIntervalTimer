import pic0 from "/images/piclist/pic0.jpeg";
import pic1 from "/images/piclist/pic1.jpeg";
import pic2 from "/images/piclist/pic2.jpeg";
import pic3 from "/images/piclist/pic3.jpeg";
import pic4 from "/images/piclist/pic4.jpeg";
import pic5 from "/images/piclist/pic5.jpeg";
import pic6 from "/images/piclist/pic6.jpeg";
import pic7 from "/images/piclist/pic7.jpeg";
import pic8 from "/images/piclist/pic8.jpeg";
import pic9 from "/images/piclist/pic9.jpeg";

function RandomImage() {
  const images = [pic0, pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9];
  const randomImageIndex = Math.floor(Math.random() * images.length);

  return (
    <img
      id="image"
      src={images[randomImageIndex]}
      alt="Buddhist Meditation Image"
      className="image"
    />
  );
}

export default RandomImage;
