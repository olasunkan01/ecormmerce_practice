import React from 'react'
import Card from '../commonfiles/Card'
import latest_collections from '../../assets/new_collections'
import './latestcollection.css'

const LatestCollectionz = () => {
    return (
      <div>
          
               <div className='new_collections'>
                  <h1>Latest collection👋</h1>
                  <p>Explore our latest collection across variety of items and shop more from our platform</p>
                  <hr />
                  <div className='collections'>
                      {latest_collections.map((card, i)=>{
                          return<Card key={i} id={card.id} name={card.name} img={card.img} new_price={card.new_price} old_price={card.old_price}/>  
                          
                      })}
  
                  </div>
  
               </div>
          
      </div>
    )
  }

export default LatestCollectionz