import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logged : false,
    create : false,
    account : []
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
        ajoutCompte(state, action){
            state.account.push(action.payload);
        }
    },
});

export const {checkLogged , checkCreate , ajoutCompte} = loginSlice.actions;

export default loginSlice.reducer;


