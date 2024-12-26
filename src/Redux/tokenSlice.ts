import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name:'session',
    initialState:{
        userSession:''
    },
    reducers:{
        setToken:(state,action)=>{
            state.userSession=action.payload;
        },
        clearToken:(state)=>{
            state.userSession='';
        }
    }
})
export default tokenSlice.reducer;
export const {setToken,clearToken} = tokenSlice.actions;