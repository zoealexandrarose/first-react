import "./styles.css"; // import css file and apply rules to app component
import React, { useState } from "react"; // !!

import one from "./assets/image1.jpeg";
import two from "./assets/image2.jpeg";
import three from "./assets/image3.jpeg";
import four from "./assets/image4.jpeg";
import five from "./assets/image5.jpeg";
import six from "./assets/image6.jpeg";

const images = [one, two, three, four, five, six];

const Loading = ({ calculatedAmount }) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading images...</label>
      <progress
        id="images-loaded"
        max="100"
        value={calculatedAmount}
      ></progress>
    </div>
  </aside>
);
// app component
// reusable piece of code that returns a react element
// only looking at functional components in this project
const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [numberLoaded, setnumberLoaded] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;
    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0;
    });
  };

  const handleImageLoad = () => {
    setnumberLoaded((numberLoaded) => numberLoaded + 1);
  };

  return (
    <section>
      <header>
        <h1>Zesty</h1>
        <h2>
          A photography project <br /> by Ella Fielding
        </h2>
      </header>

      <figure>
        {numberLoaded < images.length && (
          <Loading calculatedAmount={(numberLoaded / images.length) * 100} />
        )}
        <figcaption>
          {currentImage + 1} / {images.length}{" "}
        </figcaption>
        {images.map((imageURL, index) => (
          <img
            alt=""
            key={imageURL}
            src={imageURL}
            onClick={handleClick}
            onLoad={handleImageLoad}
            className={currentImage === index ? "display" : "hide"}
          />
        ))}
        ;
      </figure>
    </section>
  );
};

export default App; // should be last part of file
