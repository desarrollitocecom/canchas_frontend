import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeStep: 0,
  informacion: null,
  horarios: null,
  pago: null
}

const ReservaSlice = createSlice({
  name: 'reserva',
  initialState,
  reducers: {
    setActiveStep: (state, action) => {
      state.activeStep = action.payload;
    },
  }
});

export const { setActiveStep } = ReservaSlice.actions

export default ReservaSlice.reducer