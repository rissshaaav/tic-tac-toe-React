import React, {useState} from 'react'
import Square from '../Square/Square'
import './BoardStyle.css'
import {Cross, Circle} from '../../Marks/Marks'

const Board = () => {

  let initialState = ["","","","","","","","",""];
  const [gameState, setGameState] = useState(initialState);

  const marker = () =>{
    
  }

  return (
    <div className='board'>  
      {/* row 1 */}
        <Square className='br-r-b'>
          <Circle/>
        </Square>
        <Square className='br-r-b'>

        </Square>
        <Square className='br-b'>

        </Square>

        {/* row 2 */}
        <Square className='br-r-b'>

        </Square>
        <Square className='br-r-b'>

        </Square>
        <Square className='br-b'>

        </Square>

        {/* row 3 */}
        <Square className='br-r'>

        </Square>
        <Square className='br-r'>

        </Square>
        <Square>
          <Cross/>
        </Square>
    </div>
  )
}

export default Board
