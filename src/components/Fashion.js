import React, { useState, useEffect } from 'react';

import data from '../data/outfits.js';
import { useGlobalContext } from './context';

import Slider from './Slider.js';

const Fashion = () => {
  /*const [outfits, setOutfits] = useState(data);*/

  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [textModal, setTextModal] = useState('');

  const outfits = data;

  /*const openModal = (id) => {
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
      console.log('aqyu');
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
  }, [index, outfits, screenWidth]); */

  return (
    <section id="fashion-section" className="section section-fashion">
      <h1 className="title">our picked outfits</h1>
      <Slider />
    </section>
  );
};

export default Fashion;
