export const reducers = (state, action) => {
  switch (action.type) {
    case "ALL_MOVIES":
      return { ...state, allMovies: action.payload };
    case "MOVIE_ID":
      return { ...state, id: action.payload };
    case "SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    default:
      return { ...state };
  }
};
