import React, { useState, useEffect, memo } from "react";

import { Spinner } from "@bigbinary/neetoui";

import { useMovie } from "../../store/MovieStore";

const MovieCard = () => {
  const { currentMovie } = useMovie();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentMovie) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 100);

      return () => clearTimeout(timer);
    }

    return () => {};
  }, [currentMovie]);

  if (!currentMovie) {
    return (
      <div className="min-h-72 mx-auto mb-3.5 mt-3.5 flex w-60 flex-col items-center justify-center gap-1 text-center">
        <h6 className="mt-1.5 flex h-full w-full items-center justify-center italic text-gray-500">
          Please select a movie from search to see details!
        </h6>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-72 mx-auto mb-3.5 mt-3.5 flex w-60 flex-col items-center justify-center">
        <Spinner size="large" />
      </div>
    );
  }

  return (
    <div className="min-h-72 mx-auto mb-2 mt-10 flex w-48 cursor-pointer flex-col items-center justify-center gap-1 text-center">
      <img
        alt={currentMovie?.Title}
        className="h-[90%] object-contain"
        src={currentMovie?.Poster}
      />
      <h5 className="mt-2 text-lg font-bold text-gray-900">
        {currentMovie?.Title}
      </h5>
      <h5 className="text-sm text-gray-600">
        {currentMovie?.Language?.split(",")[0]}
      </h5>
      <h5 className="mt-2 text-sm text-gray-700">
        <span className="font-semibold">Type: </span>
        {currentMovie?.Type}
      </h5>
      <h5 className="text-sm text-gray-700">
        <span className="font-semibold">Year: </span>
        {currentMovie?.Year}
      </h5>
    </div>
  );
};

export default memo(MovieCard);
