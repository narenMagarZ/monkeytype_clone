import {createSlice} from '@reduxjs/toolkit'


const initialState = false

const startTimer = createSlice({
    name:'STARTTIMER',
    initialState,
    reducers:{
        isTimerReady:(state,action)=>{
            state = action.payload
            return state
        }
    }
})
export const {isTimerReady} = startTimer.actions
export default startTimer.reducer