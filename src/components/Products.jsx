import React, { useContext } from 'react'
import ProductContext from '../Context/ProductContext'
import Product from './product'

export default function Products() {

    const {products} = useContext(ProductContext)
  return (
    <div className='App_items'>
    {
      products.map(
        (product, key) => (
        
        <Product  key={key} product={product} />
      
        )
      )
    }

  </div>
  )
}
