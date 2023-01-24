import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

function StartBtn() {
  const { toggleTimer, isTimerRunning, stopTimer, hasTimerEnded } = useContext(MyContext)
  const startOrPause = isTimerRunning ? 'PAUSE' : 'START'

  const teste = () => {
    if (hasTimerEnded) {
      toggleTimer(!isTimerRunning);
      stopTimer(false);
    } else {
      toggleTimer(!isTimerRunning);
    }
  }
  return (
    <div>
      <button className='start-btn' onClick={teste}>{startOrPause}</button>
    </div>
  )
}

export default StartBtn