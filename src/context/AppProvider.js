import React, { useState, useContext, createContext } from "react";

export const AppContext = createContext();

const initialState = "Seba";

const AppProvider = (props) => {
  const [name, setName] = useState(initialState);

  const changeName = (newName) => {
    setName(newName);
  };

  const appData = { name, changeName };

  return <AppContext.Provider value={{ appData }} {...props} />;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
