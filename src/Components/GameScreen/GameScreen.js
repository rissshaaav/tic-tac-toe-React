import React from 'react'
import './GameScreenStyle.css'
import Board from './Board/Board'

const GameScreen = () => {
  return (
    <div className='gameScreen'>
        <h1>Your Turn</h1>
        <Board/>
    </div>
  )
}

export default GameScreen
