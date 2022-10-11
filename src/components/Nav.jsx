import React, { useContext } from "react";
import { ACTIONS } from "./ACTIONS";
import { dataContext } from "./context_reducers/Context";

const Nav = () => {
  const { state, dispatch } = useContext(dataContext);
  return (
    <>
      <div className="flex justify-between bg-blue-400 px-6 py-2 mb-2">
        <h1 className="text-2xl">tmdb</h1>
        <div>
          <input
            type="text"
            placeholder="search"
            className="outline-none rounded-xl px-4 py-1"
            onChange={(e) =>
              dispatch({ type: ACTIONS.SEARCH_QUERY, payload: e.target.value })
            }
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
