import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info: null,
};

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        loadmovie: (state, action) => {
            state.info = action.payload;
        },
        removeMovie: (state, action) => {
            state.info = null;
        },
    },
});

export const { loadmovie, removeMovie } = movieSlice.actions;

export default movieSlice.reducer;