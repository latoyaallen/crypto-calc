import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { convertCurrency, convertTo } from './conversionSlice'

export function Conversion() {
  const conversionAmount = useSelector((state) => state.conversion.amount);
  const newCurrency = useSelector((state) => state.conversion.newCurrency);
  const dispatch = useDispatch();

  return (
    <div>
      <div> Convert $1000 USD to </div>
      <div>
        <select onChange={e => dispatch(convertTo(e.target.value))}>
          <option value="usd">USD</option>
          <option value="btc">Bitcoin</option>
          <option value="eth">Ethereum</option>
          <option value="mana">Decentraland</option>
        </select>
        <div>
          <div>{conversionAmount}</div>
          <div>{newCurrency}</div>
        </div>
      </div>
    </div>
  )
}

  // https://codesandbox.io/s/github/reduxjs/redux-essentials-counter-example/tree/master/?from-embed=&file=/src/features/counter/Counter.js
//
  // useSelector Allows you to extract data from the Redux store state, using a selector function.
  // useDispatch Use to dispatch actions when needed
  // onClick={() => dispatch(mySliceREducerFunction())}
  // or
  // onClick={() => dispatch(mySliceREducerFunction(e.target.value))}
  // to get data coming from DOM
