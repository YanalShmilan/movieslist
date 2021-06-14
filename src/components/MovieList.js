import List from './List';

const MovieList = () => {
  return (
    <div>
      <div className="movies-list">
        <List text="Watchlist" filter="unWatched" />
      </div>
      <div className="watched-movies-list">
        <List text="Watched" filter="Watched" />
      </div>
    </div>
  );
};
export default MovieList;
