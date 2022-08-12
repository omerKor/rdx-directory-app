import { configureStore } from '@reduxjs/toolkit';

import { directorySlice } from './directorySlice'

export const store = configureStore({
    reducer: {
        directory: directorySlice,
    },
});

