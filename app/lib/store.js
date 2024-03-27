import { configureStore } from "@reduxjs/toolkit";
import themeSlice from '@/app/lib/features/theme/theme'

const  store = configureStore({
    devTools: true,
    reducer: {
        theme: themeSlice,
    },
});

export default store

