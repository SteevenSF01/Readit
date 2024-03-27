import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '@/app/lib/features/counter/counterSlice'
import themeSlice from '@/app/lib/features/theme/theme'

const  store = configureStore({
    devTools: true,
    reducer: {
        counter: counterSlice,
        theme: themeSlice,
    },
});

export default store

