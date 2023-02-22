import React from 'react'
import './SquareStyle.css'

const Square = (props) => {
  return (
    <div className={`square ${props.className}`} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default Square
