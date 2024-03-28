import { configureStore } from "@reduxjs/toolkit";
import themeSlice from '@/app/lib/features/theme/theme'
import loginSlice from '@/app/lib/features/login/loginSlice';
import bookSlice from '@/app/lib/features/data/data'

const  store = configureStore({
    devTools: true,
    reducer: {
        theme: themeSlice,
        login: loginSlice,
        book: bookSlice,
    },
});

export default store

