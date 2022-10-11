import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "./context_reducers/Context";

const Details = () => {
  const {
    state: { id },
    dispatch,
  } = useContext(dataContext);
  const [detail, setDetail] = useState([]);
  const url = `https://movie-task.vercel.app/api/movie?movieId=${id}`;
  const fetchData = async () => {
    const detailsData = await fetch(url);
    const res = await detailsData.json();
    setDetail(res.data);
  };
  console.log(detail);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className=" w-4/5 ">
          <h1 className="text-4xl font-mono my-10 text-center">
            More About <strong>{detail.title}</strong>
          </h1>
          <img
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${detail.backdrop_path})`,
            }}
            className="h-[50vh] w-full object-contain bg-cover bg-no-repeat bg-center"
            src={`https://image.tmdb.org/t/p/original${detail.poster_path}`}
            alt="Poster"
          />
          <p className="my-2">
            <strong>Genres:</strong>{" "}
            {detail.genres?.map((g) => {
              return (
                <>
                  <span className="ml-2 bg-gray-400 px-4 text-sm py-1 rounded-xl">
                    {g.name}
                  </span>
                </>
              );
            })}
          </p>

          {detail.belongs_to_collection && (
            <div className="flex items-center">
              <p>
                <strong>Collection: </strong>{" "}
                {detail.belongs_to_collection?.name}
              </p>
              <img
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${detail.belongs_to_collection?.backdrop_path})`,
                }}
                className="h-8 mx-2 rounded-2xl w-8 object-contain bg-cover bg-no-repeat bg-center"
                src={`https://image.tmdb.org/t/p/original${detail.belongs_to_collection?.poster_path}`}
                alt="Poster"
              />
            </div>
          )}
          <p>
            <strong>Released:</strong>{" "}
            {detail.status === "Released" ? (
              <span>{detail.release_date}</span>
            ) : (
              "Not yet Released"
            )}
          </p>

          <p className="flex ">
            <strong>Language:</strong>{" "}
            {detail.spoken_languages?.map((lang) => {
              return (
                <>
                  <span className="ml-2">{lang.name}</span>
                </>
              );
            })}
          </p>
          <p>
            <strong>Overview:</strong> {detail.overview}
          </p>
        </div>
      </div>
    </>
  );
};

export default Details;
