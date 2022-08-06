import { useEffect, useRef, useState } from "react"
import {useSelector,useDispatch} from 'react-redux'
import {isTimerReady} from './startTimer'

function Timer(){
    const [timerValue,setTimerValue] = useState(60)
    const isStart = useSelector((state)=>state.STARTTIMER)
    let timerRef = useRef(null)
    const dispatchTimer =  useDispatch()


    useEffect(()=>{
        function startTimer(){
            timerRef.current = setInterval(() => {
                if(timerValue > 0){
                    setTimerValue((prevValue)=>prevValue - 1)
                } 
                if(timerValue === 1){
                    dispatchTimer(isTimerReady(false))
                }
                clearInterval(timerRef.current)
            }, 1000);
        }
        if(isStart) startTimer()
    },[timerValue, isStart,dispatchTimer])
    return(
        <div className="timer-container">
            <span id="timer">
                {timerValue}
            </span>
        </div>
    )
}

export default Timer