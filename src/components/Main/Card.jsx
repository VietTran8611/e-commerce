import React from 'react'

export const Card = (props) => {
  return (
    <div className={`card ${props.cl}`}>
        <div className='card-content'>
            <img src={props.img} alt="" />
            <p>{props.pName}</p>
            <p className='bold'>${props.price}</p>
        </div>
        <div className='add-cart'>
            <button>
                <img className='shoppingcart' src="/e-commerce/img/shopping-cart.png" alt="" />
                <span className='bold'>Add to cart</span>
            </button>
        </div>
    </div>
  )
}
