import React from 'react';

import ML from '../layouts/MainL';
import Cart from '../components/Cart';

import { useRouter } from 'next/router'

import MinCart from '../components/MinCart';

import data from '../data/product';

import { useSelector } from 'react-redux';

export default function Home() {

  let [products,setProducts] = React.useState(null);

  const arr = useSelector((state) => state.shop.arr);

  React.useEffect(()=>{
    setProducts(data);
  },[]);

  let [stateMinCart, setStateMinCart] = React.useState(false);

  let [fullCost,setFullCost] = React.useState(0);

  let findButton = (e)=>{
     if(e.target.tagName == 'BUTTON'){
      setStateMinCart(true);
     }
  }
  let closeMinBasket = ()=>{
    setStateMinCart(false);
  }

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

  const router = useRouter()
  let wentBasket = () =>{
    router.push('/basket')
  }
  return (
    <div>
      <ML title={'hello'} />

      <div className='container mt-3'>

    
   <div className='row' onClick={findButton}>
   {products?.map((el,i)=>(
           <Cart key={el.id} cart={ el }/>
      ))}
   </div>
   
   
   {/* мини-корзина */}
   <div>
        <div className={stateMinCart==true? 'basket-min active': 'basket-min'}>


          <center>
          <p style={{'fontSize':'20px'}} className='mt-3'>Общая сумма заказа:  <b>{fullCost} руб.</b> </p> 
            <button onClick={wentBasket} className='btn btn-primary mb-2'><i className="fa fa-shopping-basket" aria-hidden="true"></i> Перейти в корзину</button>
          <br/>
          <button onClick={closeMinBasket} className='btn btn-danger mb-4'><i className="fa fa-trash" aria-hidden="true"></i> Закрыть окно</button>
          </center> 
          <div className='row'>
        {products?.map((el,i)=>{
            if(arr.hasOwnProperty(el.id)){
                return <MinCart key={el.id} cart={ el } count={arr[el.id]}/> 
            }else{
                return false;
            }
        })}
        </div>
        </div>

    </div>
   {/* мини-корзина */}
   
   <style jsx global>{`
        .image-main {
          height:100%;
          max-height: 400px;
        }

        .basket-min {
          display: block;
          position: fixed;
          bottom: 0;
        right: 0;
          width: 100%;
          max-width: 320px;
          height: 440px;
          overflow: auto;
          font-size: 16px;
          background-color:#212529;
          border-radius: 30px;
          color: snow;
          padding:2px 40px;
          display: none;
        }
        .basket-min.active{
          display: block;
          animation: opacity 1s ease-out;
        }
        @keyframes opacity {
          0% {
              opacity: 0;
          }
      
          1% {
              opacity: 0;
          }
      
          100% {
              opacity: 1;
          }
      }
      `}</style>

    </div>

    </div>
  )
}
