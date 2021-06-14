import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../store/actions';
const DeleteButton = (props) => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => dispatch(deleteMovie(props.id))}
      variant="contained"
      color="secondary"
    >
      Delete
    </Button>
  );
};
export default DeleteButton;
