import { configureStore } from "@reduxjs/toolkit";
import themeSlice from '@/app/lib/features/theme/theme'
import loginSlice from '@/app/lib/features/login/loginSlice';
import bookSlice from '@/app/lib/features/data/data'
import FavorisSlice from "@/app/lib/features/favoris/FavorisSlice";

const  store = configureStore({
    devTools: true,
    reducer: {
        theme: themeSlice,
        login: loginSlice,
        book: bookSlice,
        favoris : FavorisSlice,
    },
});

export default store

