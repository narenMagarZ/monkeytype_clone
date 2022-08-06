import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    wordTyped:0,
    errorChar:0
}
const countWord = createSlice({
    name:"COUNTWORD",
    initialState,
    reducers :{
        typed:(state,action)=>{
            return {...state,...action.payload}
        }
    }
})

export const {typed} = countWord.actions
export default countWord.reducer