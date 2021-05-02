import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { convertCurrency, convertTo } from './conversionSlice'

export function Conversion() {
  // useSelector Allows you to extract data from the Redux store state, using a selector function.
  const conversion = useSelector((state) => state.conversion.value);
  const newCurrency = useSelector((state) => state.conversion.newCurrency);
  // useDispatch Use to dispatch actions when needed
  // onClick={() => dispatch(mySliceREducerFunction())}
  const dispatch = useDispatch()

  // NEXT TRY THIS
  // https://stackoverflow.com/questions/62246412/redux-toolkit-action-not-triggered-in-reducer
  //

  return (
    <div>
      <div>
        <select id="coin" onChange={e => dispatch(convertTo(e.target.value))}>
          <option value="usd">USD</option>
          <option value="btc">Bitcoin</option>
          <option value="eth">Ethereum</option>
          <option value="mana">Decentraland</option>
        </select>
        <div>
          <span>{conversion}</span>
        </div>
      </div>
    </div>
  )
}

  // https://codesandbox.io/s/github/reduxjs/redux-essentials-counter-example/tree/master/?from-embed=&file=/src/features/counter/Counter.js
