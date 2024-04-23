import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ProductContext from '../../Context/ProductContext'

export default function HomeLink() {
    const {newProducts,devUrl,setProducts} = useContext(ProductContext)
  return (
    <NavLink to={`${devUrl}/`}>
        <button
          onClick={() => setProducts(newProducts)}
          className="btnCategory"
        >
          Вся продукция
        </button>
      </NavLink>
  )
}

