import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arr: {},
  }


  export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
      setShop: (state, action) => {
        let elem = action.payload;
          console.log(state.arr[elem]);
        if(state.arr[elem]){
          state.arr[elem]++
        }else{
          state.arr[elem] = 1
        }
      },
      delShop: (state, action) => {
        let elem = action.payload;
        if(state.arr[elem]> 1){
          state.arr[elem]--;
        }else{
          delete state.arr[elem];
        }
      },
    },
  })

  export const { setShop, delShop } = shopSlice.actions
  export default shopSlice.reducer
