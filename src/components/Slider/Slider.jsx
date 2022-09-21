import "./Slider.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const INITIAL_INDEX = 0;

export default function Slider({ imgs, title }) {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(INITIAL_INDEX);

  useEffect(() => {
    setImages(imgs);
  }, [imgs]);

  const handlePrevious = () =>
    index === 0
      ? setIndex(imgs.length - 1)
      : setIndex((prevValue) => prevValue - 1);

  const handleNext = () =>
    index === imgs.length - 1
      ? setIndex(INITIAL_INDEX)
      : setIndex((prevValue) => prevValue + 1);

  return (
    <>
      <section className="slider">
        {images.length >= 2 ? (
          <button className="slider-btn" onClick={handlePrevious}>
            <span>&#10092;</span>
          </button>
        ) : null}
        <img
          className="slider-img"
          src={images[index]}
          loading="lazy"
          alt={`${title} imgs`}
        />
        {images.length >= 2 ? (
          <button className="slider-btn" onClick={handleNext}>
            <span>&#10093;</span>
          </button>
        ) : null}
      </section>
    </>
  );
}
