import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createMovie } from '../store/actions';

const AddMovie = () => {
  const [movie, setMovie] = useState('');
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setMovie(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createMovie(movie));
    setMovie('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-input">
      <input
        value={movie}
        onChange={handleChange}
        placeholder="add movie"
        style={{ height: 30, width: 160 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
};
export default AddMovie;
