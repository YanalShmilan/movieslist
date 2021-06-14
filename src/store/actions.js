export const CREATE_MOVIE = 'CREATE_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';

export const createMovie = (movie) => {
  return {
    type: CREATE_MOVIE,
    payload: { movie },
  };
};
export const deleteMovie = (id) => {
  return {
    type: DELETE_MOVIE,
    payload: { id },
  };
};
export const updateMovie = (id) => {
  return {
    type: UPDATE_MOVIE,
    payload: { id },
  };
};
