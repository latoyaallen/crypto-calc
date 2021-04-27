import { configureStore } from '@reduxjs/toolkit'
import conversionReducer from '../features/conversion/conversionSlice'

export default configureStore({
  reducer: {
    conversion: conversionReducer,
  },
})
