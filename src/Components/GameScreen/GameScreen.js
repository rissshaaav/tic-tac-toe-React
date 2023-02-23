import React, { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './GameScreenStyle.css';
import Board from './Board/Board';
import ScoreCard from './ScoreCard/ScoreCard';

export const currentPlayerContext = createContext();

const GameScreen = () => {

  const [playerWithCircleScoreValue, setPlayerWithCircleScoreValue] = useState(0);
  const [playerWithCrossScoreValue, setPlayerWithCrossScoreValue] = useState(0);
  const location = useLocation();
  const playerWithCircle = location.state?.playerWithCircle || '';
  const playerWithCross = location.state?.playerWithCross || '';
  const [currentPlayerData, setCurrentPlayerData] = useState(playerWithCross);
  const handleCurrentPlayerData = (data) => {
    setCurrentPlayerData(data);
  }

  const handlePlayerWithCircleScoreValue = (value) =>{
    setPlayerWithCircleScoreValue(value)
  }
  const handlePlayerWithCrossScoreValue = (value) =>{
    setPlayerWithCrossScoreValue(value)
  }


  return (
    <div className='gameScreen'>
        <h1>{`${currentPlayerData}'s turn`}</h1>

        <currentPlayerContext.Provider value={handleCurrentPlayerData}>
          <Board 
          playerWithCircle={playerWithCircle} 
          playerWithCross={playerWithCross}
          handlePlayerWithCircleScoreValue= {handlePlayerWithCircleScoreValue}
          handlePlayerWithCrossScoreValue= {handlePlayerWithCrossScoreValue}/>
        </currentPlayerContext.Provider>

        <ScoreCard 
        playerWithCircle={playerWithCircle} 
        playerWithCross={playerWithCross}
        playerWithCircleScoreValue={playerWithCircleScoreValue}
        playerWithCrossScoreValue={playerWithCrossScoreValue}/>
    </div>
  )
}

export default GameScreen
