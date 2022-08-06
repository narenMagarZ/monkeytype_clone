import {configureStore} from '@reduxjs/toolkit'
import startTimerReducer from './component/paragraph/startTimer'
import wordsTypedReducer from './component/paragraph/wordstypedslice'
export const store = configureStore({
    reducer : {
        STARTTIMER:startTimerReducer,
        WORDSTYPED:wordsTypedReducer
    }
})