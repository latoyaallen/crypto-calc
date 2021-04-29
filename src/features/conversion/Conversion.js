import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { convertCurrency } from './conversionSlice'

export function Conversion() {
  // useSelector Allows you to extract data from the Redux store state, using a selector function.
  const conversion = useSelector((state) => state.conversion.value)
  // useDispatch Use to dispatch actions when needed
  // onClick={() => dispatch(mySliceREducerFunction())}
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Convert USD to BTC"
          onClick={() => dispatch(convertCurrency())}
        >
          Convert USD to BTC
        </button>
        <span>{conversion}</span>
      </div>
    </div>
  )
}
  // https://codesandbox.io/s/github/reduxjs/redux-essentials-counter-example/tree/master/?from-embed=&file=/src/features/counter/Counter.js
