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

    React.useEffect(()=>{
      setProducts(data);
    },[]);

  return (
    <div>
        <ML title={'hello2'} />
        <div className='container'>
    
        <Modal/>
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
