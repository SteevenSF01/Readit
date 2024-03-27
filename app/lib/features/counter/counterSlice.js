import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    count : 0
}

const counter = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment(state){
            state.count ++;
        },
        decrement(state) {
            if (state.count === 0 ) return; 
            state.count --;
        },
        reset(state) {
            state.count = 0;
        }
    }
})
export const {increment ,decrement,reset}=counter.actions
export default counter.reducer  
