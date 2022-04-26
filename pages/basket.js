import React from 'react'
import ML from '../layouts/MainL';
import { useRouter } from 'next/router'
import { setShop } from '../store/counterSlice'
import { useSelector, useDispatch } from 'react-redux';
import BasketCart from '../components/BasketCart';

import Modal from '../components/Modal';

import data from '../data/product';

export default function basket() {
    const router = useRouter()
    const dispatch = useDispatch();
    const arr = useSelector((state) => state.shop.arr);
    React.useEffect(()=>{
        if(Object.keys(arr).length == 0){
            router.push('/')
        } 
    },[arr]);

    let [products,setProducts] = React.useState(null);

    let [fullCost,setFullCost] = React.useState(0);

    React.useEffect(()=>{
      setProducts(data);
    },[]);


    React.useEffect(()=>{
      let sum = 0;
      {products?.map((el,i)=>{
        if(arr.hasOwnProperty(el.id)){
          sum += el.cost*arr[el.id];
            return true; 
        }else{
            return false;
        }
    })}
    setFullCost(sum);

    });


    

  return (
    <div>
        <ML title={'hello2'} />
        <div className='container'>
    
        <Modal/>
        <center> <p style={{'fontSize':'20px'}} className='mt-3'>Общая сумма заказа:  <b>{fullCost} руб.</b> </p> </center>
        <div className='row'>
        {products?.map((el,i)=>{
            if(arr.hasOwnProperty(el.id)){
                return <><BasketCart key={el.id} cart={ el } count={arr[el.id]}/></> 
            }else{
                return false;
            }
        })}
        </div>
        </div>
        <style jsx global>{`
        .image-main {
          height:100%;
          max-height: 400px;
        }
      `}</style>
        </div>
  )
}
