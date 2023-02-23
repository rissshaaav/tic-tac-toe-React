import React, {useContext, useEffect, useState} from 'react'
import ReactDOMServer from 'react-dom/server';
import Square from '../Square/Square'
import './BoardStyle.css'
import {Cross, Circle} from '../../Marks/Marks'
import { currentPlayerContext } from '../GameScreen'

const Board = ({playerWithCross, playerWithCircle, handlePlayerWithCircleScoreValue, handlePlayerWithCrossScoreValue}) => {

  const [gameState, setGameState] = useState(["","","","","","","","",""]);
  const [isPlayerWithCrossTurn, setIsPlayerWithCrossTurn] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState(playerWithCross);
  const [playerWithCircleScore, setPlayerWithCircleScore] = useState(0);
  const [playerWithCrossScore, setPlayerWithCrossScore] = useState(0);

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

  const checkWinner = () =>{
    const winPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i = 0; i<winPattern.length; i++){
      const [a,b,c] = winPattern[i];
      const AgameState = ReactDOMServer.renderToString(gameState[a]);
      const BgameState = ReactDOMServer.renderToString(gameState[b]);
      const CgameState = ReactDOMServer.renderToString(gameState[c]);
      if(AgameState && BgameState===AgameState && CgameState===AgameState){
        if(AgameState===(ReactDOMServer.renderToString(marks.circle.mark))){
          setPlayerWithCircleScore(prevState => prevState + 1);
        }
        else{
          setPlayerWithCrossScore(prevState => prevState + 1);
        }
      }
    }
  }

  useEffect(()=>{
    checkWinner()
  }, [gameState])

  useEffect(()=>{
    handlePlayerWithCircleScoreValue(playerWithCircleScore);
  }, [playerWithCircleScore])

  useEffect(()=>{
    handlePlayerWithCrossScoreValue(playerWithCrossScore);
  }, [playerWithCrossScore])

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
        {console.log('circle score '+playerWithCircleScore)}
        {console.log('cross score '+playerWithCrossScore)}
    </div>
  )
}

export default Board
