import React, { useEffect, useState } from 'react'
import data from './product.json'
import { Card } from './Card'

export const Main = () => {
    const [checkedState, setCheckedState] = useState(
        new Array(data.length).fill(false)
    );
    const [check,setCheck] = useState(false)

    useEffect(()=>{
        const updatedCheckedState = checkedState.map((item, index) =>
            index < 6 ? true : false
          );
          setCheckedState(updatedCheckedState);
    },[])

    const more =()=>{
        setCheck(true)
        setCheckedState(new Array(data.length).fill(true))
    }

    const less =()=>{
        setCheck(false)
        const updatedCheckedState = checkedState.map((item, index) =>
            index < 6 ? true : false
          );
          setCheckedState(updatedCheckedState);
    }

  return (
    <div className='main'>
        <h1 className='bold'>My Shop</h1>
        <div className='card-container'>
            {data.map(({img,product,price},index)=>{
                return(
                    <Card cl= {checkedState[index] ? 'content-card show' : 'content-card'} img={img} pName = {product} price ={price}/>
                )
            })}
        </div>
        
        {check ? <button className='a-btn' onClick={less}>Show Less Products</button> : <button className='a-btn' onClick={more}>SHow More Products</button>}
    </div>
  )
}
