import React, { createContext, useState } from 'react';

export const AccessContext = createContext();

export const AccessProvider = ({ children }) => {
  const [isVC, setIsVC] = useState(false);
  const [baseURL, setBaseURL] = useState("https://6b38-103-145-154-250.ngrok-free.app");
  const [likedList, setLikedList] = useState([])
  const [requestList, setRequestList] = useState({})

  const updateIsVC = (truth) => {
    setIsVC(truth);
  };

  const updateBaseURL = (url) => {
    setBaseURL(url);
  }
  
  const updateLikedList = (item) => {
    if (likedList.includes(item))
        return
    setLikedList([...likedList, item]);
  }
  
  const updateRequestList = (key, item) => {
    setRequestList({
        [key]: item,
        ...requestList
    });
  }

  const value = { 
    isVC,
    baseURL,
    likedList,
    requestList,
    updateIsVC,
    updateBaseURL,
    updateLikedList,
    updateRequestList

   };

  return (
    <AccessContext.Provider value={value}>
      {children}
    </AccessContext.Provider>
  );
};