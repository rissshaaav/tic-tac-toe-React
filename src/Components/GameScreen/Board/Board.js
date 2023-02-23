import React, {useContext, useState} from 'react'
import Square from '../Square/Square'
import './BoardStyle.css'
import {Cross, Circle} from '../../Marks/Marks'
import { currentPlayerContext } from '../GameScreen'

const Board = ({playerWithCross, playerWithCircle}) => {

  const [gameState, setGameState] = useState(["","","","","","","","",""]);
  const [isPlayerWithCrossTurn, setIsPlayerWithCrossTurn] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState(playerWithCross);

  const handleCurrentPlayerData = useContext(currentPlayerContext)

  const marks = {
    cross: {
      mark: <Cross/>,
      player: playerWithCross
    },
    circle: {
      mark: <Circle/>,
      player: playerWithCircle
    }
  }

  const marker = (index) =>{
    if(gameState[index]===""){
      setGameState((prevState)=>{
        const newGameState = [...prevState];
        newGameState[index] = isPlayerWithCrossTurn?marks.cross.mark:marks.circle.mark;
        return newGameState;
      })
      setIsPlayerWithCrossTurn(!isPlayerWithCrossTurn);
      const temp = isPlayerWithCrossTurn?marks.circle.player:marks.cross.player;
      setCurrentPlayer(temp);
      handleCurrentPlayerData(temp);
    }
  }

  return (
    <div className='board'>  
      {/* row 1 */}
        <Square className='br-r-b' onClick={()=>marker(0)}>{gameState[0]}</Square>
        <Square className='br-r-b' onClick={()=>marker(1)}>{gameState[1]}</Square>
        <Square className='br-b' onClick={()=>marker(2)}>{gameState[2]}</Square>

        {/* row 2 */}
        <Square className='br-r-b' onClick={()=>marker(3)}>{gameState[3]}</Square>
        <Square className='br-r-b' onClick={()=>marker(4)}>{gameState[4]}</Square>
        <Square className='br-b' onClick={()=>marker(5)}>{gameState[5]}</Square>

        {/* row 3 */}
        <Square className='br-r' onClick={()=>marker(6)}>{gameState[6]}</Square>
        <Square className='br-r' onClick={()=>marker(7)}>{gameState[7]}</Square>
        <Square onClick={()=>marker(8)}>{gameState[8]}</Square>
        {console.log('turn of '+currentPlayer)}
    {console.log("is cross's turn? "+isPlayerWithCrossTurn)}
    </div>
  )
}

export default Board
