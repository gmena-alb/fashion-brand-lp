import React, { useState, useEffect } from 'react';
import { useGlobalContext } from './context';

const Modal = () => {
  const { isModalOpen, closeModal, modalContent } = useGlobalContext();

  const { img, inspiration } = modalContent;
  return (
    <>
      <div
        className={`${isModalOpen ? 'modal open' : 'modal closed'}`}
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="text">
          <p>{inspiration}</p>
        </div>
      </div>
      <div
        className={`${
          isModalOpen ? 'modal-overlay open' : 'modal-overlay closed'
        }`}
        onClick={closeModal}
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
    </>
  );
};
export default Modal;
