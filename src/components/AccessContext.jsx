import React, { createContext, useState } from 'react';

export const AccessContext = createContext();

export const AccessProvider = ({ children }) => {
  const [isVC, setIsVC] = useState(false);

  const updateIsVC = (truth) => {
    setIsVC(truth);
  };

  const value = { 
    isVC,
    updateIsVC
   };

  return (
    <AccessContext.Provider value={value}>
      {children}
    </AccessContext.Provider>
  );
};