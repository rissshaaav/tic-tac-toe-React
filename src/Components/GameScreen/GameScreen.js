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
        <Board/>
        <ScoreCard playerWithCircle={playerWithCircle} playerWithCross={playerWithCross}/>
        {console.log(playerWithCircle, playerWithCross)}
    </div>
  )
}

export default GameScreen
