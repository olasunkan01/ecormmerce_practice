import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'

const Card = ({id,name,img,new_price,old_price}) => {
  return (
    <div className='item'>
        <img src={img} alt="" />
        <p className='align-self-center'>{name}</p>
        <div className="align-self-center item-prices">
            <div className="item-price-new">
               ${new_price}
            </div>
            <div className="item-prices-old">
                ${old_price}
            </div>    
        </div>
        <Link to={`/product/${id}`} className='align-self-center'>
          <button className='btn btn-sm btn-outline-primary mt-3 me-3'>View Details</button>
          <button className='btn btn-sm btn-outline-primary mt-3'>Add to cart</button>
        </Link>
    </div>
  )
}

export default Card