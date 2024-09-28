import React from 'react'

export const UperNav = () => {
  return (
    <ul className='upperNav smallfs'>
        <ul className='top-right-nav'>
            <li className='beginNav'><a href="#">Start a business </a></li>
            <li><a href="#">Insider</a></li>
        </ul>
        <ul className='top-left-nav'>
            <li>
                <a href="#">Languages ▼</a>
                <ul className='dropdown lang'> 
                    <ul className='lang'>
                        <li className='eng'><a href="#">English</a></li>
                        <li><a href="#">French</a></li>
                    </ul>
                </ul>
            </li>
            <li className='help'>
                <a href="#">Help ▼</a>
                <ul className='dropdown'>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">Order</a></li>
                    <li><a href="#">Return</a></li>
                </ul>
            </li>
            <li className='login'>
                <img className='login-icon' src="/e-commerce/img/user.png" alt="" />
                <a href="">Login ▼</a> 
            </li>
        </ul>
    </ul>
  )
}
