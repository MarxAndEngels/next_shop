import { combineReducers , configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';

import shop from './counterSlice'; 

const combinedReducer = combineReducers({
    shop,
})


export const makeStore = () =>
  configureStore({
    reducer: combinedReducer,
  })

  export const wrapper = createWrapper(makeStore);