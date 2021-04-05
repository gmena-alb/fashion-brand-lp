import React, { useState, useEffect } from 'react';
import { useGlobalContext } from './context';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

//Cosas que necesito >>
// JS con las imagenes
//el tamanyo de la pantalla

const Slider = () => {
  const [numSlidesShown, setNumSlidesShown] = useState(0);
  const [indexSlider, setIndexSlider] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);

  const modalContent = '';
  const textModal = '';
  const {
    sliderData,
    screenWidth,
    resizeSlider,
    openModal,
    closeModal,
    isModalOpen,
  } = useGlobalContext();

  useEffect(() => {
    const event = window.addEventListener('resize', () => {
      resizeSlider(window.innerWidth);
    });
    return () => window.removeEventListener('resize', event);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if (numSlidesShown === 3) {
      setLastIndex(sliderData.length - 3);
    } else if (numSlidesShown === 2) {
      setLastIndex(sliderData.length - 2);
    } else {
      setLastIndex(sliderData.length - 1);
    }
    //TODO IS DATA NEEDED HERE?
  }, [sliderData, screenWidth]);

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
          console.log('3 sliders');
          if (
            index === indexSlider ||
            index === indexSlider + 1 ||
            index === indexSlider + 2
          ) {
            return (
              <>
                <div
                  onClick={() => openModal(id)}
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
        } else if (numSlidesShown === 2) {
          if (index === indexSlider || index === indexSlider + 1) {
            return (
              <>
                <div
                  onClick={() => openModal(id)}
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
                  onClick={() => openModal(id)}
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
      <div
        className={`${isModalOpen ? 'modal open' : 'modal closed'}`}
        style={{
          backgroundImage: `url(${modalContent})`,
        }}
      >
        <div className="text">
          <p>{textModal}</p>
        </div>
      </div>
      <div
        className={`${
          isModalOpen ? 'modal-overlay open' : 'modal-overlay closed'
        }`}
      ></div>
      <div
        className={`${
          isModalOpen ? 'close-container open' : 'close-container closed'
        }`}
        onClick={closeModal}
      >
        <div className="leftright"></div>
        <div className="rightleft"></div>
      </div>
    </div>
  );
  //modal()
};

export default Slider;
