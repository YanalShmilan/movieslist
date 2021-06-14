import DeleteButton from './DeleteButton';
import UpdateMovie from './UpdateMovie';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const MovieItem = (props) => {
  return (
    <Card className="movie-item">
      <CardContent >
        <Typography >{props.movie.name}</Typography>
      </CardContent>
      <CardActions>
        <UpdateMovie movie={props.movie} text={props.text} />
        <DeleteButton id={props.movie.id} />
      </CardActions>
    </Card>
  );
};
export default MovieItem;
