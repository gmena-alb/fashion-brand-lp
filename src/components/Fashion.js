import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import data from '../data/outfits.js';

const Fashion = () => {
  /*const [outfits, setOutfits] = useState(data);*/

  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [textModal, setTextModal] = useState('');
  const [screenWidth, setScreenWidth] = useState(window.width);

  const outfits = data;

  const openModal = (id) => {
    setModalContent(outfits[id - 1].img);
    setTextModal(outfits[id - 1].inspiration);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    let lastIndex;
    if (screenWidth >= 901) {
      lastIndex = outfits.length - 3;
    } else if (screenWidth <= 900 && screenWidth >= 700) {
      lastIndex = outfits.length - 2;
    } else {
      lastIndex = outfits.length - 1;
    }
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, outfits, screenWidth]);

  useEffect(() => {
    const event = window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });
    return () => window.removeEventListener('resize', event);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="fashion-section" className="section section-fashion">
      <h1 className="title">our picked outfits</h1>
      <div className="slider">
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FaChevronLeft />
        </button>
        {outfits.map((outfit, outfitIndex) => {
          const { id, img } = outfit;
          if (screenWidth >= 901) {
            if (
              outfitIndex === index ||
              outfitIndex === index + 1 ||
              outfitIndex === index + 2
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
          } else if (screenWidth <= 900 && screenWidth >= 700) {
            if (outfitIndex === index || outfitIndex === index + 1) {
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
            if (outfitIndex === index) {
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
    </section>
  );
};

export default Fashion;
