import { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'

import '../../style/result.css'
function Result(){
    const {wordTyped,errorChar} = useSelector((state)=>state.WORDSTYPED)
    const isTimerStopped = useSelector((state)=>state.STARTTIMER)
    const [wpm,setWpm] = useState(0)
    useEffect(()=>{
        console.log(isTimerStopped)
        if(isTimerStopped){
            setWpm(()=>calculateWpm(wordTyped))
        }
    },[wordTyped,errorChar,isTimerStopped])
    const calculateWpm = (wordsTyped)=>{
        const wpm = Math.floor(wordsTyped / (1))
        return wpm
    }
    return(
        <div className='result-container'>
            <span id='wpm-value'>
                {wpm}
            </span>
        </div>
    )
}

export default Result