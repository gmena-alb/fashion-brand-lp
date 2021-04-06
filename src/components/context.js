import React, { useState, useContext } from 'react';
import data from '../data/outfits.js';

const sliderData = data;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [modalContent, setModalContent] = useState({});

  const openModal = (data) => {
    setModalContent(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const resizeSlider = (widthScreen) => {
    setScreenWidth(widthScreen);
  };

  return (
    <AppContext.Provider
      value={{
        sliderData,
        isModalOpen,
        openModal,
        closeModal,
        screenWidth,
        resizeSlider,
        modalContent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
