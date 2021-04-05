import React, { useState, useContext } from 'react';
import data from '../data/outfits.js';

const sliderData = data;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const resizeSlider = (widthScreen) => {
    setScreenWidth(widthScreen);

    //setIsModalOpen(true);
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
