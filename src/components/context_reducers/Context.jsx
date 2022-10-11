import { createContext, useEffect, useReducer } from "react";
import { ACTIONS } from "../ACTIONS";
import { reducers } from "./Reducers";

const dataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, {
    allMovies: [],
    id: null,
    searchQuery: "",
  });
  const url = "https://movie-task.vercel.app/api/popular?page=1";
  const getData = async () => {
    const fetchData = await fetch(url);
    const res = await fetchData.json();
    dispatch({ type: ACTIONS.ALL_MOVIES, payload: res.data.results });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <dataContext.Provider value={{ state, dispatch }}>
      {children}
    </dataContext.Provider>
  );
};

export { dataContext, DataContextProvider };
