import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    count:0
}
const RtkReducer = createSlice({
    name:"Counter",
    initialState,
    reducers:{
        increment: (state)=>{
            state.count +=1
        },
        decrement: (state)=>{
            state.count -=1
        }
    }
})
export const {increment,decrement} = RtkReducer.actions
export default RtkReducer.reducer
