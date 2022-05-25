import { useState, createContext } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const value = { modal, setModal };

  return (
    <ModalContext.Provider value={value}> {children} </ModalContext.Provider>
  );
};
