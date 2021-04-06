import React from 'react';

import Slider from './Slider';
import Modal from './Modal';

import data from '../data/outfits.js';

const Fashion = () => {
  const outfits = data;

  return (
    <section id="fashion-section" className="section section-fashion">
      <h1 className="title">our picked outfits</h1>
      <Slider />
      <Modal />
    </section>
  );
};

export default Fashion;
