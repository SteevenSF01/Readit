import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logged : false
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        checkLogged(state) {
            state.logged = !state.logged;
        },
    },
});

export const {checkLogged} = loginSlice.actions;

export default loginSlice.reducer;


