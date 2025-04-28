import React from 'react'
import './bestseller.css'
import Card from '../commonfiles/Card'
import all_products from '../../assets/AllProducts'


const Bestseller = () => {
  return (
    <div className='new_collectionbestseller'>
        <h1>Top Rated Pick</h1>
        <p>Explore our latest collection across variety of items</p>
        <div className='collections'>
            {all_products.map((card, i)=>{
                return<Card key={i} id={card.id} name={card.name} img={card.img} new_price={card.new_price} old_price={card.old_price}/>  
               
            })}
        </div>
    </div>
  )
}

export default Bestseller