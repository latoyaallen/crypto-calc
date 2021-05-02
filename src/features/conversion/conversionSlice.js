import { createSlice } from '@reduxjs/toolkit'

// https://redux-toolkit.js.org/usage/usage-guide#simplifying-slices-with-createslice
//    btcConversionRate: 0.000018,

export const conversionSlice = createSlice({
  name: 'conversion',
  initialState: {
    value: 100,
    newCurrency: 'us',
  },
  reducers: {
    convertCurrency: (state, action) => {
      // state.value should be the input value
      // action.payload should be the conversion rate
      state.value = state.value * action.payload;
    },

    convertTo: (state, action) => {
      console.log(state);
      console.log(action);
    }
  },
})

// Action creators are generated for each case reducer function
// // Destructure and export the plain action creators
export const { convertCurrency, convertTo } = conversionSlice.actions

export default conversionSlice.reducer
