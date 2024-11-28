
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    deporte: null,
    fecha: null,
    time: null,
}

const FiltersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setDeporte: (state, action) => {
            state.deporte = action.payload;
        },
        setFecha: (state, action) => {
            state.fecha = action.payload;
        },
        setTime: (state, action) => {
            state.time = action.payload;
        },
        resetFiltros: (state) => {
            state.deporte = null;
            state.fecha = null;
            state.time = null;
        }
    }
});

export const {setDeporte, setFecha, setTime, resetFiltros } = FiltersSlice.actions

export default FiltersSlice.reducer