import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { useSelector } from 'react-redux';
import DeleteButton from './DeleteButton';
import UpdateMovie from './UpdateMovie';

const MovieList = () => {
  let _movies = useSelector((state) => state.movies);
  let unWatchedMovies = _movies.filter((movie) => movie.status === 'unWatched');
  let watchedMovies = _movies.filter((movie) => movie.status == 'Watched');
  console.log(unWatchedMovies);
  console.log(watchedMovies);

  unWatchedMovies = unWatchedMovies.map((movie) => {
    return (
      <Card className="movie-item">
        <CardContent>
          <Typography>{movie.name}</Typography>
        </CardContent>
        <CardActions>
          <UpdateMovie id={movie.id} text="watched" />
          <DeleteButton id={movie.id} />
        </CardActions>
      </Card>
    );
  });

  watchedMovies = watchedMovies.map((movie) => {
    return (
      <Card className="movie-item">
        <CardContent>
          <Typography>{movie.name}</Typography>
        </CardContent>
        <CardActions>
          <UpdateMovie id={movie.id} text="Unwatch" />
          <DeleteButton id={movie.id} />
        </CardActions>
      </Card>
    );
  });

  return (
    <div>
      <div className="movies-list">
        <label> Watchlist : {unWatchedMovies.length}</label>

        <input className="search" type="search" placeholder="search" />
        {unWatchedMovies}
      </div>
      <div className="watched-movies-list">
        <label> Watched : {watchedMovies.length}</label>

        <input className="search" type="search" placeholder="search" />
        {watchedMovies}
      </div>
    </div>
  );
};
export default MovieList;
