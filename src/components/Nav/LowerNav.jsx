import React from 'react'

export const LowerNav = () => {
  return (
    <ul className='upperNav lowerNav'>
        <div className='logo'>
          <p className='bold'>Company Name</p>
        </div>
        <div className='navUltility'>
          <div className='search-container'>
            <input type="text" placeholder='Search...' />
            <img src="/e-commerce/img/search.png" alt="" />
          </div>
          <a className='cart-con' href="#">
            <img className='cart' src="/e-commerce/img/cart.png" alt="" />
          </a>
        </div>
    </ul>
  )
}
