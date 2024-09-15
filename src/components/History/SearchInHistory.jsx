import React, { useEffect, useRef } from "react";

import HistoryCard from "./HistoryCard";

import { useMovie } from "../../store/MovieStore";

const History = () => {
  const { currentMovie, history } = useMovie();
  const scrollableDivRef = useRef(null);

  const scrollToElement = id => {
    if (scrollableDivRef.current) {
      const element = scrollableDivRef.current.querySelector(`#${id}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        console.log("Scrolled to element:", id);
      }
    }
  };

  useEffect(() => {
    if (history.length > 0 && currentMovie) {
      if (history.some(movie => movie.imdbID === currentMovie.imdbID)) {
        scrollToElement(currentMovie.imdbID);
        console.log(
          "Current movie found in history, scrolling to:",
          currentMovie.imdbID
        );
      }
    }
  }, [currentMovie, history]);

  return (
    <>
      <div className="mt-3 flex w-full flex-col items-center gap-1 font-bold">
        <h3>History</h3>
      </div>
      <div
        className="no-scrollbar flex h-full w-full flex-col items-center gap-2 overflow-y-auto p-2"
        ref={scrollableDivRef}
      >
        {history.length > 0 &&
          [...history].reverse().map(movie => (
            <div className="w-full" id={movie.imdbID} key={movie.imdbID}>
              <HistoryCard info={movie} />
            </div>
          ))}
      </div>
    </>
  );
};

export default History;
