import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { updateMovie } from '../store/actions';
const UpdateMovie = (props) => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => dispatch(updateMovie(props.id))}
      variant="contained"
      color="primary"
    >
      {props.text}
    </Button>
  );
};
export default UpdateMovie;
