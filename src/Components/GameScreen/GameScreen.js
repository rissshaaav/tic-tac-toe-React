import React, { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './GameScreenStyle.css';
import Board from './Board/Board';
import ScoreCard from './ScoreCard/ScoreCard';

export const currentPlayerContext = createContext();

const GameScreen = () => {
  const location = useLocation();
  const playerWithCircle = location.state?.playerWithCircle || '';
  const playerWithCross = location.state?.playerWithCross || '';

  const [currentPlayerData, setCurrentPlayerData] = useState(playerWithCross);
  const handleCurrentPlayerData = (data) => {
    setCurrentPlayerData(data);
  }


  return (
    <div className='gameScreen'>
        <h1>{`${currentPlayerData}'s turn`}</h1>

        <currentPlayerContext.Provider value={handleCurrentPlayerData}>
          <Board playerWithCircle={playerWithCircle} playerWithCross={playerWithCross}/>
        </currentPlayerContext.Provider>

        <ScoreCard playerWithCircle={playerWithCircle} playerWithCross={playerWithCross}/>
    </div>
  )
}

export default GameScreen
