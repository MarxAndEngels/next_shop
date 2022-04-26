import React, { useEffect } from 'react'
import { setShop } from '../store/counterSlice'
import { useSelector, useDispatch } from 'react-redux';

import { useRouter } from 'next/router'

export default function Cart(props) {
    const dispatch = useDispatch();
    const arr = useSelector((state) => state.shop.arr);
     const router = useRouter()
    const addCount = (param) =>{
        dispatch(setShop(param))
        // console.log(arr)
        // router.push('/basket')
      }
  return (
    <div className='col-lg-4 mt-3'>
           <div className="card">
      <img src={props.cart.image} className="card-img-top image-main" alt={props.cart.name}/>
      <div className="card-body" style={{'textAlign': 'center'}}>
        <h5 className="card-title">{props.cart.name}</h5>
        <p className="card-text">{props.cart.cost} руб.</p>
    
         <button onClick={()=> {addCount(props.cart.id) }} className='btn btn-primary'>Купить</button>


      </div>
    </div>
    </div>
    
  )
}
