import React, { memo } from "react";

import { Spinner } from "@bigbinary/neetoui";
import { useQuery } from "@tanstack/react-query";
import moviesApi from "apis/movies";

import MoviePreviewCard from "./MoviePreviewCard";

import { useMovie } from "../../store/MovieStore";

const MovieLists = () => {
  const { currentMovie } = useMovie();
  const fetchData = async currentMovie => {
    const response = await moviesApi.fetch(currentMovie);

    return response.data;
  };

  const {
    data: extrainfo,
    isLoading,
    error,
  } = useQuery(["extraInfo", currentMovie], () => fetchData(currentMovie), {
    enabled: !!currentMovie,
  });

  if (isLoading) return <Spinner />;

  if (error) {
    console.error(error);

    return <h2>Not able to fetch data.</h2>;
  }

  return <MoviePreviewCard extrainfo={extrainfo} />;
};

export default memo(MovieLists);
