import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './PickYourSideScreen.css'
import {Cross, Circle} from '../Marks/Marks';

// const playerWithCircleContext = React.createContext();
// const playerWithCrossContext = React.createContext();

const PickYourSideScreen = () => {
  const navigateToGame = useNavigate();
  const [playerWithCircle, setPlayerWithCircle] = useState("");
  const [playerWithCross, setPlayerWithCross] = useState("");

  const handleSubmit = () =>{
    navigateToGame('/gamescreen');
    // console.log(playerWithCircle, playerWithCross)
  }

  return (
    <div className='pickYourSide'>
      <h1>Pick Your Sides</h1>
      <form onSubmit={handleSubmit}>
        <div className='sides'>
          <label htmlFor='playerWithCircle'>
            <Circle/>
          </label>
          {/* <playerWithCircleContext.Provider value={playerWithCircle}> */}
            <input type='text' placeholder='player choosing Circle' id='playerWithCircle' required name='playerWithCircle' value={playerWithCircle} onChange={(e)=> setPlayerWithCircle(e.target.value)}/>
          {/* </playerWithCircleContext.Provider> */}
        </div>

        <div className='sides'>
          <label htmlFor='playerWithCross'>
            <Cross/>
          </label>
          {/* <playerWithCrossContext.Provider value={playerWithCross}> */}
            <input type='text' placeholder='player choosing Cross' id='playerWithCross' required name='playerWithCross' value={playerWithCross} onChange={(e)=> setPlayerWithCross(e.target.value)}/>
          {/* </playerWithCrossContext.Provider> */}
        </div>

        <div className='button'>
          <button type='submit'>Click to Start</button>
        </div>
      </form>
    </div>
  )
}

export default PickYourSideScreen
