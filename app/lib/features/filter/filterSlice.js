import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchBook : ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        searchBook :(state , action) => {
            state.searchBook = action.payload
        }
    }
})

export const {searchBook} = filterSlice.actions
export default filterSlice.reducer