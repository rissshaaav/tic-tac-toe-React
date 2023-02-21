import React from 'react'
import './GameScreenStyle.css'
import Board from './Board/Board'
import ScoreCard from './ScoreCard/ScoreCard'

const GameScreen = () => {
  return (
    <div className='gameScreen'>
        <h1>Shreya's turn</h1>
        <Board/>
        <ScoreCard/>
    </div>
  )
}

export default GameScreen
