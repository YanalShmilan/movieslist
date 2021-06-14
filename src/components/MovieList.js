import List from './List';

const MovieList = () => {
  return (
    <div>
      <div className="movies-list">
        <List watched={false} />
      </div>
      <div className="watched-movies-list">
        <List watched />
      </div>
    </div>
  );
};
export default MovieList;
