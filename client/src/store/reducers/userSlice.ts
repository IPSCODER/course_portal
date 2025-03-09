import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { count } from "console";

interface userState {
    count:any,
    loginState:any,
    courses:any,
    course:any
}


const initialState:userState = {
    count : 0,
    loginState:false,
    courses:[],
    course:{}
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
        setCourses:(state,action:PayloadAction<any>) =>{
            state.courses = action.payload
        },setCourse:(state,action:PayloadAction<any>) =>{
            state.course = action.payload
        }
    }
})

export const {
    increment,decrement,setCourses,setCourse
} = userSlice.actions;


export default userSlice.reducer;