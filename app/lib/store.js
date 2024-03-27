import { configureStore } from "@reduxjs/toolkit";
import themeSlice from '@/app/lib/features/theme/theme'
import loginSlice from '@/app/lib/features/login/loginSlice';

const  store = configureStore({
    devTools: true,
    reducer: {
        theme: themeSlice,
        login: loginSlice,
    },
});

export default store

