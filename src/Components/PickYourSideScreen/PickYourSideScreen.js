import React from 'react'
import './PickYourSideScreen.css'
import {Cross, Circle} from '../Marks/Marks';

const PickYourSideScreen = () => {
  let playerWithCircle, playerWithCross;
  return (
    <div className='pickYourSide'>
      <h1>Pick Your Sides</h1>
      <form>
        <div className='sides'>
          <label htmlFor='playerWithCircle'>
            <Circle/>
          </label>
          <input type='text' placeholder='player choosing Circle' id='playerWithCircle' value={playerWithCircle} required/>
        </div>

        <div className='sides'>
          <label htmlFor='playerWithCross'>
            <Cross/>
          </label>
          <input type='text' placeholder='player choosing Cross' id='playerWithCross' value={playerWithCross} required/>
        </div>

        <div className='button'>
          <button>Click to Start</button>
        </div>
      </form>
    </div>
  )
}

export default PickYourSideScreen
