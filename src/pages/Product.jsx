import React from 'react'
import { useParams } from 'react-router-dom'
import ProductHd from '../components/ProductHd'
import all_products from '../assets/all_products.js'
import { TbError404 } from 'react-icons/tb'
import ProductDisplay from '../components/ProductDisplay.jsx'
import ProductDescription from '../components/ProductDescription.jsx'
import PopularProducts from '../components/PopularProducts.jsx'

const Product = () => {

  const { productId } = useParams();
  console.log("productID:",productId);
  
  const product = all_products.find((e) => e.id === Number(productId))
  if(!product){
    return <div><TbError404/></div>
  }

  else {
    return (
    <section>
      <div>
        <ProductHd product={product}/>
        <ProductDisplay product={product}/>
        <ProductDescription/>
        <PopularProducts/>
      </div>
    </section>
  )}
}

export default Product