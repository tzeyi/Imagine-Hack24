import React, { createContext, useState } from 'react';

export const AccessContext = createContext();

export const AccessProvider = ({ children }) => {
  const [isVC, setIsVC] = useState(false);
  const [baseUURL, setBaseURL] = useState("https://6b38-103-145-154-250.ngrok-free.app");

  const updateIsVC = (truth) => {
    setIsVC(truth);
  };

  const updateBaseURL = (url) => {
    setBaseURL(url);
  }

  const value = { 
    isVC,
    baseUURL,
    updateIsVC,
    updateBaseURL
   };

  return (
    <AccessContext.Provider value={value}>
      {children}
    </AccessContext.Provider>
  );
};