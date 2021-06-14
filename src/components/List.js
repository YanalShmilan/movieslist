import { useState } from 'react';
import MovieItem from './MovieItem';
import { useSelector } from 'react-redux';

const List = (props) => {
  const moviesData = useSelector((state) => state.movies);
  const [query, setQuery] = useState('');
  let movies = moviesData
    .filter(
      (movie) =>
        movie.status === props.filter &&
        movie.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((movie) => {
      return (
        <MovieItem
          movie={movie}
          text={props.filter === 'Watched' ? 'Unwatch' : 'Watched'}
        />
      );
    });
  return (
    <div>
      <label>
        {props.text} : {movies.length}
      </label>

      <input
        onChange={(event) => setQuery(event.target.value)}
        className="search"
        type="search"
        placeholder="search"
      />
      {movies}
    </div>
  );
};
export default List;
