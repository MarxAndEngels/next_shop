import React, { useEffect } from 'react'
import { setShop, delShop } from '../store/counterSlice'
import { useSelector, useDispatch } from 'react-redux';

import { useRouter } from 'next/router'

export default function Cart(props) {
    const dispatch = useDispatch();
    const arr = useSelector((state) => state.shop.arr);
     const router = useRouter()
    const addCount = (param) =>{
        dispatch(setShop(param))
      }
    const delCount = (param) =>{
        dispatch(delShop(param))
      }
  return (
    <div className='col-lg-4 mt-3'>
           <div class="card">
      <img src={props.cart.image} class="card-img-top image-main" alt={props.cart.name}/>
      <div class="card-body" style={{'text-align': 'center'}}>
        <h5 class="card-title">{props.cart.name}</h5>
        <p class="card-text" >{props.cart.cost} руб.</p>
         <button onClick={()=> {addCount(props.cart.id) }} className='btn btn-success' style={{'marginRight': '15px'}}>+</button>
         <span >{props.count}</span>
         <button onClick={()=> {delCount(props.cart.id) }} className='btn btn-danger' style={{'marginLeft': '15px'}}>-</button>
      </div>
    </div>
    </div>
    
  )
}
