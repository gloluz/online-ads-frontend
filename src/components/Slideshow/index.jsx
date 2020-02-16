import React, { useState } from "react";

import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Slideshow = ({ pictures }) => {
  const [currentPicture, setCurrentPicture] = useState(0);

  const handleNextPicture = () => {
    if (currentPicture === pictures.length - 1) {
      setCurrentPicture(0);
    } else {
      setCurrentPicture(currentPicture + 1);
    }
  };

  const handlePrevPicture = () => {
    if (currentPicture === 0) {
      setCurrentPicture(pictures.length - 1);
    } else {
      setCurrentPicture(currentPicture - 1);
    }
  };

  const translateX = currentPicture * 100;

  return (
    <div className="slideshow">
      {pictures.length > 1 && (
        <>
          <div
            role="button"
            className="slideshow-arrow left"
            onClick={handlePrevPicture}
          >
            <FontAwesomeIcon icon="chevron-left" />
          </div>
          <div
            role="button"
            className="slideshow-arrow right"
            onClick={handleNextPicture}
          >
            <FontAwesomeIcon icon="chevron-right" />
          </div>
        </>
      )}

      <div
        className="pictures"
        style={{ transform: `translateX(-${translateX}%)` }}
      >
        {pictures.length > 0 &&
          pictures.map((picture, index) => (
            <div className="picture-container" key={index}>
              <img src={picture} alt="annonce" className="picture" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Slideshow;
