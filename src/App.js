import "./styles.css"; // import css file and apply rules to app component
import React, { useState } from "react"; // !!

import one from "./assets/image1.jpeg";
import two from "./assets/image2.jpeg";
import three from "./assets/image3.jpeg";
import four from "./assets/image4.jpeg";
import five from "./assets/image5.jpeg";
import six from "./assets/image6.jpeg";

const images = [one, two, three, four, five, six];

const Loading = () => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading images...</label>
      <progress id="images-loaded" max="100" value="50"></progress>
    </div>
  </aside>
);
// app component
// reusable piece of code that returns a react element
// only looking at functional components in this project
const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const handleClick = () => {
    const length = images.length - 1;
    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0;
    });
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
        <Loading />
        <figcaption>
          {currentImage + 1} / {images.length}{" "}
        </figcaption>
        <img alt="" src={images[currentImage]} onClick={handleClick} />
      </figure>
    </section>
  );
};

export default App; // should be last part of file
