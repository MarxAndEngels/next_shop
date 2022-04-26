import React from 'react'

export default function MinCart(props) {
  return (
    <div className='col-md-6 min-cart'>
      <img style={{width: '100%','maxWidth': '180px' ,'height':'100px','maxHeight': '230px' }} src={props.cart.image} className="min--cart--image" alt={props.cart.name}/>
      <div className="card-body" style={{'textAlign': 'center'}}>
        <h5 className="card-title">{props.cart.name}</h5>
        <div className="card-text">{props.cart.cost} руб.</div>
        <div className="card-text mb-3">Количество: {props.count}</div>
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
