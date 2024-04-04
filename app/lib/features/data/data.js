import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBookData = createAsyncThunk('user/fetchUserData', async () => {
    const response = await fetch('https:/example-data.draftbit.com/books');
    const jsonData = await response.json();
    jsonData.forEach(book => {
        book.prix = book.rating * 3;
        book.prixActuel = book.prix;
        book.total = 1;
    });
    return jsonData;
});

export const userSlice = createSlice({
    name: 'book',
    initialState: { data: null, loading: false, error: null, selectedBooks: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBookData.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchBookData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            const allBooks = action.payload;
            state.selectedBooks = allBooks.sort(() => 0.5 - Math.random()).slice(0, 5);
            })
            .addCase(fetchBookData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;
