import React from "react";

import { useMovie } from "../../store/MovieStore";

const HistoryCard = ({ info }) => {
  const { currentMovie, setCurrentMovie } = useMovie();

  const handleClick = () => {
    setCurrentMovie(info);
  };

  const isSelected = String(info.imdbID) === String(currentMovie?.imdbID);

  return (
    <div
      className={`flex h-full w-full cursor-pointer items-center justify-center rounded-xl p-2 text-black
        ${
          isSelected ? "bg-blue-500" : "bg-blue-300"
        } transition-colors duration-300`}
      onClick={handleClick}
    >
      {info.Title}
    </div>
  );
};

export default HistoryCard;
