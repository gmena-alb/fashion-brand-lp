import React, { useState, useEffect } from 'react';
import { useGlobalContext } from './context';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Slider = () => {
  const [numSlidesShown, setNumSlidesShown] = useState(0);
  const [indexSlider, setIndexSlider] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);

  const {
    sliderData,
    screenWidth,
    resizeSlider,
    openModal,
  } = useGlobalContext();

  useEffect(() => {
    const event = window.addEventListener('resize', () => {
      resizeSlider(window.innerWidth);
    });
    return () => window.removeEventListener('resize', event);
  }, [screenWidth]);

  useEffect(() => {
    if (screenWidth >= 1201) {
      setNumSlidesShown(3);
    } else if (screenWidth <= 1200 && screenWidth >= 801) {
      setNumSlidesShown(2);
    } else {
      setNumSlidesShown(1);
    }
  }, [screenWidth]);

  useEffect(() => {
    console.log(lastIndex);
    if (numSlidesShown === 3) {
      setLastIndex(sliderData.length - 3);
    } else if (numSlidesShown === 2) {
      setLastIndex(sliderData.length - 2);
    } else {
      setLastIndex(sliderData.length - 1);
    }
  }, [screenWidth, lastIndex]);

  useEffect(() => {
    if (indexSlider < 0) {
      setIndexSlider(lastIndex);
    }
    if (indexSlider > lastIndex) {
      setIndexSlider(0);
    }
  }, [indexSlider]);

  return (
    <div className="slider">
      <button className="prev" onClick={() => setIndexSlider(indexSlider - 1)}>
        <FaChevronLeft />
      </button>
      {sliderData.map((data, index) => {
        const { id, img } = data;
        if (numSlidesShown === 3) {
          if (
            index === indexSlider ||
            index === indexSlider + 1 ||
            index === indexSlider + 2
          ) {
            return (
              <div>
                <div
                  key={img}
                  onClick={() => openModal(data)}
                  className="activeSlide card"
                >
                  <img src={img} alt="" className="img" />
                </div>
              </div>
            );
          } else {
            return;
          }
        } else if (numSlidesShown === 2) {
          if (index === indexSlider || index === indexSlider + 1) {
            return (
              <>
                <div
                  onClick={() => openModal(data)}
                  className="activeSlide card"
                  key={id}
                >
                  <img src={img} alt="" className="img" />
                </div>
              </>
            );
          } else {
            return;
          }
        } else {
          if (index === indexSlider) {
            return (
              <>
                <div
                  onClick={() => openModal(data)}
                  className="activeSlide card"
                  key={id}
                >
                  <img src={img} alt="" className="img" />
                </div>
              </>
            );
          } else {
            return;
          }
        }
      })}
      <button className="next" onClick={() => setIndexSlider(indexSlider + 1)}>
        <FaChevronRight />
      </button>
    </div>
  );
  //modal()
};

export default Slider;
