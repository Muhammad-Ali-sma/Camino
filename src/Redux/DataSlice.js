import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedTests: [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addAssessment: (state, action) => {
      state.selectedTests = action.payload;
    },
  },
})


export const { addAssessment } = dataSlice.actions

export default dataSlice.reducer