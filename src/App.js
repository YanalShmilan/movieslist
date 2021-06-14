import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <AddMovie />
      <MovieList />
    </div>
  );
}

export default App;
