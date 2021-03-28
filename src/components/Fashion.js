import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import data from '../data/outfits.js';

const Fashion = () => {
  const [outfits, setOutfits] = useState(data);
  const [index, setIndex] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [textModal, setTextModal] = useState('');

  const openModal = (id) => {
    setModalContent(outfits[id - 1].img);
    setTextModal(outfits[id - 1].inspiration);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    console.log('closing');
    setIsModalOpen(false);
  };

  useEffect(() => {
    const lastIndex = outfits.length - 3;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, outfits]);

  return (
    <section id="fashion-section" className="section section-fashion">
      <h1 className="title">our picked outfits</h1>
      <div className="slider">
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FaChevronLeft />
        </button>
        {outfits.map((outfit, outfitIndex) => {
          const { id, img, inspiration } = outfit;

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
//By index we take 3 things >> array
export default Fashion;
