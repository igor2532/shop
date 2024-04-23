import React, { useContext } from 'react'
import ProductContext from '../../Context/ProductContext'
import { NavLink } from 'react-router-dom'

export default function CategoriesItems() {
    const {categories,devUrl,setProducts,newProducts} = useContext(ProductContext)
    
  return (
    categories.map((item, key) => (
        <div key={key}>
          <NavLink key={key} to={`${devUrl}/`}>
          
            <button
              onClick={() =>
                setProducts(
                    newProducts.filter((product) => product.cat === item.id)
                )
              }
              className="btnCategory"
            >
              {item.title}
            </button>
          </NavLink>
        </div>
      ))
  )
}
