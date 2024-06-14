import React from 'react'
import '../App.css'

function Square({val, pickSquare}) {
  return (
    <div onClick={pickSquare} className='square'>
        {val}
    </div>
  )
}

export default Square