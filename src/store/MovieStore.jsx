import React, { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export const useMovie = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [currentMovie, setCurrentMovie] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    <MovieContext.Provider
      value={{ currentMovie, setCurrentMovie, history, setHistory }}
    >
      {children}
    </MovieContext.Provider>
  );
};
