import React, { useState, useEffect } from 'react';
import { useGlobalContext } from './context';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

//Cosas que necesito >>
// JS con las imagenes
//el tamanyo de la pantalla

const Slider = () =>
  //Screensize, data, model
  {
    const [numSlidesShown, setNumSlidesShown] = useState(0);
    const [index, setIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(0);

    const modalContent = '';
    const textModal = '';
    const {
      sliderData,
      screenWidth,
      setScreenWidth,
      openModal,
      closeModal,
      isModalOpen,
    } = useGlobalContext();

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
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    }, [index]);

    useEffect(() => {
      setScreenWidth(window.innerWidth);
      const event = window.addEventListener('resize', () => {
        setScreenWidth(window.innerWidth);
      });
      return () => window.removeEventListener('resize', event);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div className="slider">
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FaChevronLeft />
        </button>
        {sliderData.map((data, index) => {
          const { id, img } = data;
          if (numSlidesShown === 3) {
            if (index === index || index === index + 1 || index === index + 2) {
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
            if (index === index || index === index + 1) {
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
            if (index === index) {
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
        <button className="next" onClick={() => setIndex(index + 1)}>
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