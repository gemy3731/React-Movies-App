import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name:'token',
    initialState:{
        token:''
    },
    reducers:{
        setToken:(state,action)=>{
            state.token=action.payload;
        },
        clearToken:(state)=>{
            state.token='';
        }
    }
})
export default tokenSlice.reducer;
export const {setToken,clearToken} = tokenSlice.actions;