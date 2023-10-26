import React, { useEffect, useState } from "react";
import people from "./data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
  FaBeer,
} from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const maxIndex = people.length - 1;

  const handleLeft = () => {
    if (index >= maxIndex) {
      setIndex(0);
      return;
    }
    setIndex((prevIndex) => prevIndex + 1);
  };

  const handleRight = () => {
    if (index <= 0) {
      setIndex(maxIndex);
      return;
    }
    setIndex((prevIndex) => prevIndex - 1);
  };

  const randomIndex = () => {
    const random = Math.floor(Math.random() * people.length);
    setIndex(random);
  };

  const data = people[index];
  return (
    <div className="review">
      <div className="img-container">
        <img className="person-img" src={data.image} alt={data.name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{data.name}</h4>
      <p className="job">{data.job}</p>
      <p className="info">{data.text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handleLeft}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleRight}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomIndex}>
        surprise me
      </button>
    </div>
  );
};

export default Review;
