import React, { useContext } from "react";
import { dataContext } from "./context_reducers/Context";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ACTIONS } from "./ACTIONS";

const MovieCard = () => {
  const {
    state: { allMovies, searchQuery },
    dispatch,
  } = useContext(dataContext);
  const navigate = useNavigate();

  const nav = (id) => {
    navigate(`/details:${id}`);
    dispatch({ type: ACTIONS.MOVIE_ID, payload: id });
  };

  const filterData = () => {
    let sortedData = allMovies;
    if (searchQuery) {
      sortedData = sortedData.filter((d) =>
        d.original_title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return sortedData;
  };

  return (
    <>
      <div className="flex flex-wrap">
        {filterData()?.length === 0 ? (
          <p>No results found</p>
        ) : (
          filterData().map((movie) => {
            return (
              <>
                <div
                  key={movie.id}
                  className="border w-72 cursor-pointer px-4 py-2 rounded-xl mx-4 my-2 text-center"
                  onClick={() => nav(movie.id)}
                >
                  <img
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                    }}
                    className="h-48 w-64 object-contain bg-cover bg-no-repeat bg-center"
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt="Poster"
                  />
                  <h1 className="mt-2 text-2xl font-mono ">
                    {movie.original_title}
                  </h1>

                  <p className="font-serif">Popularity: {movie.popularity}</p>
                  <p>
                    Language:{" "}
                    {movie.original_language === "en" ? (
                      <span>English</span>
                    ) : (
                      <span>{movie.original_language}</span>
                    )}
                  </p>
                  <p>Votes: {movie.vote_count}</p>
                </div>
              </>
            );
          })
        )}
      </div>
    </>
  );
};

export default MovieCard;
