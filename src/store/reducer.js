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
        status: 'unWatched',
        id: state.movies[state.movies.length - 1].id + 1,
      };
      console.log(movie);
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
      let newMovie = state.movies.find(
        (movie) => movie.id === action.payload.id
      );
      if (newMovie.status == 'unWatched') {
        newMovie = {
          name: newMovie.name,
          stauts: 'Watched',
          id: newMovie.id,
        };
      } else if (newMovie.status == 'Watched') {
        newMovie = {
          name: newMovie.name,
          stauts: 'unWatched',
          id: newMovie.id,
        };
      }

      let newMovies = state.movies.map((movie) =>
        movie.id != action.payload.id ? movie : newMovie
      );
      return { ...state, movies: newMovies };
    }
    default:
      return state;
  }
};

export default reducer;
