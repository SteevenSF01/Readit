import { configureStore } from "@reduxjs/toolkit";
import themeSlice from '@/app/lib/features/theme/theme'
import loginSlice from '@/app/lib/features/login/loginSlice';
import bookSlice from '@/app/lib/features/data/data'
import favori from '@/app/lib/features/favoris/favorisSlice'

const  store = configureStore({
    devTools: true,
    reducer: {
        theme: themeSlice,
        login: loginSlice,
        book: bookSlice,
        favoris : favori,
    },
});

export default store

