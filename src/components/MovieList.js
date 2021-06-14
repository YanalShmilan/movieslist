import List from './List';
import AddMovie from "./AddMovie"
const MovieList = () => {
  return (
    
    <div>
      <div className="first-list" >
        <AddMovie  />
      <div className="second-list">
      
        <List watched={false} />
      </div>
      </div>
      
      <div className="watched-movies-list" >
        <List watched />
      </div>
    </div>
  );
};
export default MovieList;
