import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieSlice";
import tvReducer from "./reducers/tvSlice";
import personReducer from "./reducers/personSlice";

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        tv: tvReducer,
        person: personReducer,
    },
    // Enable Redux DevTools and add options (if needed)
    devTools: process.env.NODE_ENV !== "production", // DevTools enabled only in development
});
