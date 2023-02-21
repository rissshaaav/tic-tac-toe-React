import React from 'react'
import './ScoreCardStyle.css'

const ScoreCard = () => {
  return (
    <div className='score'>
        <h1>Score</h1>
        <div className='scoreSection'>
            <div className='left scoreSection-item'>
                <div>Rishav</div>
                <div>8</div>
            </div>
            <div className='right scoreSection-item'>
                <div>Shreya</div>
                <div>8</div>
            </div>
        </div>
    </div>
  )
}

export default ScoreCard
