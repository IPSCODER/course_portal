import { createSlice } from "@reduxjs/toolkit";
import { count } from "console";

interface userState {
    count:any,
    loginState:any
}


const initialState:userState = {
    count : 0,
    loginState:false
}


const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        increment:(state) =>{
            state.count = state.count + 1;
        },
        decrement:(state) =>{
            state.count = state.count - 1;
        },
    }
})

export const {
    increment,decrement
} = userSlice.actions;


export default userSlice.reducer;