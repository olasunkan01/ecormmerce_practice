import React,{useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import all_products from '../../assets/AllProducts'
import latest_collections from '../../assets/new_collections'
import './productdetails.css'
import {FaStar} from 'react-icons/fa'
import { useCart } from '../context/CartContext'

const ProductDetails = () => {
    const {addToCart} = useCart()
     useEffect(()=>{
      window.scrollTo(0,0)
     }) 

    const {id} = useParams()
    const navigate = useNavigate()
    const product = all_products.find(p=>p.id === parseInt(id))

    if (!product)return<h2 className='text-center mt-5'>Product not found</h2>
    
  return (
    <div className='container-fluid py-5'>
        <div className="row justify-content-center align-items-start px-4 px-lg-5">

            <div className="col-lg-6 col-md-6 mb-4 mb-lg-0 text-center">
                <img src={product.img} alt={product.name} className='img-fluid main-img mb-3 w-100' />
            

                <div className="d-flex justify-context-center gap-2 flex-wrap">
                    <img src={product.img} alt={product.name} className='img-thumbnail thumb-img' />

                    <img src={product.img} alt={product.name} className='img-thumbnail thumb-img' />
                </div>

            </div>
        

            <div className="col-lg-6 col-md-6">
                <h1 className='display-5 fw-bold mb-3'>{product.name}</h1>
                <div className="text-warning mb-5 fs-5">{[...Array(5).map((_,i)=>(<Faster key={i}/>))]}
                </div>

                <h3 className='text-center'>${product.new_price.toFixed(2)}</h3>
                <p className='text-muted text-decorsation-line-throughnmb-4'>${product.old_price.toFixed(2)}</p>

                <p>{product.description} || 'This is a beautifull product you should have. Buy now!</p>

               <div>
                   <button className='btn btn-lg btn-primary' onClick={()=>addToCart(product)}>Add to Cart</button>
                   <button className='btn btn-outline-primary' onClick={()=>navigate(-1)}>Go Back</button>
                </div>
            </div>
        </div>

    </div> 
  )
}

export default ProductDetails