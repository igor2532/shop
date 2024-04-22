import React, { useContext } from 'react'
import Categories from '../Categories'
import { NavLink, Route, Routes } from 'react-router-dom'
import ProductItem from '../ProductItem'
import Comments from '../Comments'
import Products from '../Products'
import ProductContext from '../../Context/ProductContext'

export default function Left() {
    
   const {devUrl} = useContext(ProductContext) 
  return (
    <div className='leftColumn'>
  <Categories  />
<Routes>
  <Route  path={`${devUrl}/item/:id`}   element={
<div>
  <ProductItem   />
  <div className='App_div_back'><NavLink className='btnTourl'     to={`${devUrl}/`}>Перейти к продуктам</NavLink></div>
  <Comments  />
</div>
  } />
  <Route path={`${devUrl}/`}   element={
  <Products  />
  } />
 </Routes>
       </div>
  )
}
