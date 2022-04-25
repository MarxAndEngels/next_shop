import React from 'react'

export default function MinCart(props) {
  return (
    <div className='col-md-6 min-cart'>
      <img style={{width: '100%','maxWidth': '180px' ,'height':'100px','maxHeight': '230px' }} src={props.cart.image} class="min--cart--image" alt={props.cart.name}/>
      <div class="card-body" style={{'text-align': 'center'}}>
        <h5 class="card-title">{props.cart.name}</h5>
        <div class="card-text">{props.cart.cost} руб.</div>
        <div class="card-text mb-3">Количество: {props.count}</div>
    </div>

    <style jsx>{`
        .min-cart{
          color: snow;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
