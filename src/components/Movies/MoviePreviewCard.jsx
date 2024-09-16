import React from "react";

import { useMovie } from "../../store/MovieStore";

const MoviePreviewCard = ({ info, extrainfo }) => {
  const { setCurrentMovie, history, setHistory } = useMovie();

  const handleClick = () => {
    if (!info) return;
    setCurrentMovie(info);
    if (!history.includes(info)) {
      setHistory([...history, info]);
    }
  };

  if (extrainfo) {
    return (
      <div
        className="min-h-55 perspective-1000 hover:shadow-3xl flex w-48 transform cursor-pointer flex-col items-center gap-1
          rounded-md border-b-2 border-gray-400 p-2 shadow-2xl"
        onClick={handleClick}
      >
        <img
          alt="Movie Poster"
          className="h-[70%] w-[100%] rounded-sm object-cover shadow-lg"
          src={info && info.Poster}
        />
        <h5 className="m-0 mt-2 h-[10%] text-center text-sm font-bold text-gray-900">
          {info && info.Title}
        </h5>
        <h5 className="h-[10%]">
          {extrainfo && extrainfo?.Language?.split(",")[0]}
        </h5>
        <h5 className="h-[10%]">{extrainfo && extrainfo?.Type}</h5>
        <h5 className="h-[10%]">{extrainfo && extrainfo?.Year}</h5>
      </div>
    );
  }

  return (
    <div
      className="min-h-55 perspective-1000 hover:shadow-3xl flex w-48 transform cursor-pointer flex-col items-center gap-1
          rounded-md border border-gray-400 p-2 shadow-2xl"
      onClick={handleClick}
    >
      <img
        alt=""
        className="h-[60%] w-[100%] rounded-sm object-cover shadow-lg"
        src={info && info.Poster}
      />
      <h5 className="m-0 mt-2 h-[10%] text-center text-sm font-bold text-gray-900">
        {info && info.Title}
      </h5>
    </div>
  );
};

export default MoviePreviewCard;
