import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import data from '../data/outfits.js';

const Fashion = () => {
  const [outfits, setOutfits] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    //last 3 slides
    const lastIndex = outfits.length - 3;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, outfits]);

  return (
    <section className="section section-fashion">
      <h1 className="title">our picked outfits</h1>
      <div className="slider">
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FaChevronLeft />
        </button>
        {outfits.map((outfit, outfitIndex) => {
          const { id, img } = outfit;

          if (
            outfitIndex === index ||
            outfitIndex === index + 1 ||
            outfitIndex === index + 2
          ) {
            let position = 'activeSlide';
            return (
              <div className={`${position} card`} key={id}>
                <img src={img} alt="" className="img" />
              </div>
            );
          } else {
            return;
          }
        })}
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Fashion;
