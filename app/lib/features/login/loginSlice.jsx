import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logged : false,
    create : false,
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        checkLogged(state) {
            state.logged = !state.logged;
        },
        checkCreate(state) {
            state.create = !state.create;
        },
    },
});

export const {checkLogged , checkCreate} = loginSlice.actions;

export default loginSlice.reducer;


