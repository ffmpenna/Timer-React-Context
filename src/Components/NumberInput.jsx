import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

function NumberInput({ type }) {
    const { handleChange, isTimerRunning } = useContext(MyContext)
    return (
        <div className='input-container'>
            <input disabled={isTimerRunning} onChange={handleChange} name={type} type='number' min={0} max={60} maxLength={2} />
            <p disabled={isTimerRunning} className='input-label'>{type}</p>
        </div>
    )
}

export default NumberInput