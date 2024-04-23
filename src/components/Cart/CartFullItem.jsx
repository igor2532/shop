import React, { useContext } from 'react'
import ProductContext from '../../Context/ProductContext'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeSumResult } from '../../features/shop/shopSlice'

export default function CartFullItem() {
    const {cartproducts,devUrl,deleteItemInCart,minusProduct,plusProduct} = useContext(ProductContext)
    // const dispatch = useDispatch()
  
    // const { sumResult } = useSelector((state)=>state.counter)
  return (
    cartproducts.map((product, key) => (
        <div key={key} className="App_cart_full_items_item">
        <div className='App_cart_full_items_item_thumb'><img src={product.url} /></div>
        <div className='App_cart_full_items_item_title'> <NavLink to={`${devUrl}/item/${product.id}`}> {product.title}</NavLink></div>
        <div className='App_cart_full_items_cost'>{product.cost} BYN</div>
        <div className='App_cart_full_items_counts'><button disabled={product.count>1?false:true} onClick={()=>minusProduct(product)}>-</button>{product.count} шт<button disabled={product.count<10?false:true} onClick={
          
          ()=> {
            plusProduct(product)
            // dispatch(changeSumResult({state:product.cost}))
            
          }
        
        }>+</button></div>
        
        <div className='App_cart_full_items_sum'>{product.cost*product.count} BYN</div>
        <div className='App_cart_full_items_item_delete'><button onClick={() => deleteItemInCart(product)} className='btnDeleteItemInCart'>x</button></div>
        </div>
      ))
    
  )
}
