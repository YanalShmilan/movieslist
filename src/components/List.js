import { useState } from 'react';
import MovieItem from './MovieItem';
import { useSelector } from 'react-redux';

const List = (props) => {
  const moviesData = useSelector((state) => state.movies);
  const [query, setQuery] = useState('');
  let movies = moviesData
    .filter(
      (movie) =>
        movie.watched == props.watched &&
        movie.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((movie) => (
      <MovieItem movie={movie} text={props.watched ? 'Unwatch' : 'Watched'} />
    ));
  return (
    <div>
      <label>
        {props.watched ? 'Watched' : 'Watchlist'} : {movies.length}
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
