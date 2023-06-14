import './App.css';
import Menu from './Menu';
import Game from './Game';
function App() {
  return (
    <Menu LoadGame={Game}/>
  );
}

export default App;
