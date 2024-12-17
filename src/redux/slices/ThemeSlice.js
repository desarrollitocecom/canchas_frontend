import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkMode: false,
}

const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setDarkMode: (state, action) => {
            state.darkMode = action.payload
        },
    }
});

export const { setDarkMode } = ThemeSlice.actions

export default ThemeSlice.reducer