import React, { useContext } from 'react'
import MyContext from '../context/MyContext'
import StartBtn from './StartBtn'
// import formatTimeLeft from '../utils/formatTimeLeft'

function BaseTimerLabel(props) {
    
    return (
        <div className='start-btn-container'>
        <StartBtn/>
        </div>
    )
}

export default BaseTimerLabel
