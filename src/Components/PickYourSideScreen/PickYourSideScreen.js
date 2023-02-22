import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './PickYourSideScreen.css'
import {Cross, Circle} from '../Marks/Marks';

const PickYourSideScreen = () => {

  const navigateToGame = useNavigate();
  const [playerWithCircle, setPlayerWithCircle] = useState("");
  const [playerWithCross, setPlayerWithCross] = useState("");

  const handleSubmit = (event) =>{
    event.preventDefault();
    navigateToGame('/gamescreen', {state:{playerWithCircle, playerWithCross}});
  }

  return (
    <div className='pickYourSide'>
      <h1>Pick Your Sides</h1>
      
        <form onSubmit={handleSubmit}>

          <div className='sides'>
            <label htmlFor='playerWithCircle'>
              <Circle/>
            </label>
              <input type='text' placeholder='player choosing Circle' id='playerWithCircle' required name='playerWithCircle' value={playerWithCircle} onChange={(e)=> setPlayerWithCircle(e.target.value)}/>
          </div>

          <div className='sides'>
            <label htmlFor='playerWithCross'>
              <Cross/>
            </label>
              <input type='text' placeholder='player choosing Cross' id='playerWithCross' required name='playerWithCross' value={playerWithCross} onChange={(e)=> setPlayerWithCross(e.target.value)}/>
          </div>

          <div className='button'>
            <button type='submit'>Click to Start</button>
          </div>

        </form>
    </div>
  )
}

export default PickYourSideScreen
