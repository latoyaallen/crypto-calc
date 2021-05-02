import { createSlice } from '@reduxjs/toolkit'

// https://redux-toolkit.js.org/usage/usage-guide#simplifying-slices-with-createslice
//    btcConversionRate: 0.000018,

export const conversionSlice = createSlice({
  name: 'conversion',
  initialState: {
    amount: 1000,
    newCurrency: 'usd',
    rate: 1,
  },
  reducers: {
    convertCurrency: (state, action) => {
      // state.value should be the input value
      // action.payload should be the conversion rate
      state.amount = state.amount * action.payload;
    },

    convertTo: (state, action) => {
      // this should be a case statement, and it should be in another file
      // I'm not going to refactor b/c I just need this as a reference
      if(action.payload === 'btc') {
        state.amount = 1000 * 0.000018;
        state.newCurrency = action.payload;
      }
      if(action.payload === 'eth') {
        state.amount = 1000 * 0.00034;
        state.newCurrency = action.payload;
      }
      if(action.payload === 'mana') {
        state.amount = 1000 * 0.693397;
        state.newCurrency = action.payload;
      }
      if(action.payload === 'usd') {
        state.amount = 1000 * 1;
        state.newCurrency = action.payload;
      }
    }
  },
})

// Action creators are generated for each case reducer function
// // Destructure and export the plain action creators
export const { convertCurrency, convertTo } = conversionSlice.actions

export default conversionSlice.reducer
