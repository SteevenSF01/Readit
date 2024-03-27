import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    darkMode : false
}

const theme = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggledTheme(state){
        state.darkMode =!state.darkMode; 
        }
    }
})

export const {toggledTheme } = theme.actions
export default theme.reducer
