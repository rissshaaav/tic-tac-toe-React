import './App.css';
import {Routes, Route} from 'react-router-dom';
import GameScreen from './Components/GameScreen/GameScreen';
import MainScreen from './Components/MainScreen/MainScreen';
import PickYourSideScreen from './Components/PickYourSideScreen/PickYourSideScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainScreen/>} />
        <Route path='pickyourside' element={<PickYourSideScreen/>} />
        <Route path='gamescreen' element={<GameScreen/>} />
      </Routes>
    </div>
  );
}

export default App;
