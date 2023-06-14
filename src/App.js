import './App.css';
import Menu from './Menu/Menu';
import Game from './Game/Game';

function App() {
  return (
    <Menu LoadGame={Game}/>
  );
}

export default App;
