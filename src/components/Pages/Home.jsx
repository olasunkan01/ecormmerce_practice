import React from 'react'
import Hero from '../herosection/Hero'
import LatestCollectionz from '../latest_collections/LatestCollectionz'
import Newsletter from '../forms/Newsletter'
import Footer from '../footerfiles/Footer'
import Bestseller from '../Bestseller/Bestseller'


const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollectionz/>
      <Bestseller/>
      <Newsletter/>
      {/* <Footer/> */}
      
    </div>
  )
}

export default Home