import moviesData from '../data';
import { CREATE_MOVIE, DELETE_MOVIE, UPDATE_MOVIE } from './actions';
const initialState = {
  movies: moviesData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MOVIE: {
      let movie = {
        name: action.payload.movie,
        watched: false,
        id: state.movies[state.movies.length - 1].id + 1,
      };
      return {
        ...state,
        movies: [movie, ...state.movies],
      };
    }
    case DELETE_MOVIE: {
      let filterdMovies = state.movies.filter(
        (movie) => movie.id != action.payload.id
      );
      return { ...state, movies: filterdMovies };
    }
    case UPDATE_MOVIE: {
      const updatedMovie = action.payload.movie;
      updatedMovie.watched = !updatedMovie.watched;
      let newMovies = state.movies.map((movie) =>
        movie.id != action.payload.id ? movie : updatedMovie
      );
      return { ...state, movies: newMovies };
    }
    default:
      return state;
  }
};

export default reducer;
