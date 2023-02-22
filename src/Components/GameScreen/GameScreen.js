import React from 'react';
import { useLocation } from 'react-router-dom';
import './GameScreenStyle.css';
import Board from './Board/Board';
import ScoreCard from './ScoreCard/ScoreCard';



const GameScreen = () => {

  const location = useLocation();
  const playerWithCircle = location.state?.playerWithCircle || '';
  const playerWithCross = location.state?.playerWithCross || '';

  return (
    <div className='gameScreen'>
        <h1>Shreya's turn</h1>
        <Board playerWithCircle={playerWithCircle} playerWithCross={playerWithCross}/>
        <ScoreCard playerWithCircle={playerWithCircle} playerWithCross={playerWithCross}/>
    </div>
  )
}

export default GameScreen
