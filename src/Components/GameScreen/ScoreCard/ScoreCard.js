import React from 'react'
import './ScoreCardStyle.css'

const ScoreCard = (props) => {
  return (
    <div className='score'>
        <h1>Score</h1>
        <div className='scoreSection'>
            <div className='left scoreSection-item'>
                <div>{props.playerWithCross}</div>
                <div>{props.playerWithCrossScoreValue}</div>
            </div>
            <div className='right scoreSection-item'>
                <div>{props.playerWithCircle}</div>
                <div>{props.playerWithCircleScoreValue}</div>
            </div>
        </div>
    </div>
  )
}

export default ScoreCard
