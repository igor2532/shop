import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import ProductContext from '../../Context/ProductContext'
import CartFullItem from './CartFullItem'

function CartFull() {


    const navigate = useNavigate()
    const {sumCost,clearProducts} = useContext(ProductContext) 

    return (
   <div className='App_cart_full'>
    <div className='App_cart_full_title'>
        <h1>Корзина</h1>
    </div>
   <div className="App_cart_full_items">
     <CartFullItem />
    </div>
      <div className='App_cart_full_results'>Итого: {sumCost} BYN</div>
      <div className='App_cart_full_clear'>
        <button onClick={clearProducts}  className="clearBtn" >
          Очистить корзину
        </button>
      </div>
   </div>      
    )
}

export default CartFull
