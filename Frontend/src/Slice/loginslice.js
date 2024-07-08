import {createSlice} from "@reduxjs/toolkit";

export const loginSlice= createSlice({
    name: "login",
    initialState: {
        token: null,
        firstName: null,
        lastName: null,
        userName: null,
        isLog: false,
    },
    reducers: {
        setToken: (state, action)=>{
            state.token = action.payload;
            state.isLog = true;
        },
        setfirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setlastName: (state, action) => {
            state.lastName = action.payload;
        },
        setuserName: (state, action) => {
            state.userName = action.payload;
        },
        logout: (state) => {
            state.token = null;
            state.firstName = null;
            state.lastName = null;
            state.userName = null;
            state.isLog= false;
        },
    }
})

export const {
    setToken,
    setfirstName,
    setlastName,
    setuserName,
    logout
} = loginSlice.actions;

export default loginSlice.reducer