import React, { useContext, useEffect } from 'react'
import ProductContext from '../../Context/ProductContext'
import { NavLink, useNavigate } from 'react-router-dom'

export default function CartItemsMini() {
    const {cartproducts,devUrl,deleteItemInCart} = useContext(ProductContext)



  return (
    cartproducts.map((product, key) => (
        <div key={key} className="Cart_items_item">
          <div>
            <div>
              {" "}
          
              <NavLink to={`${devUrl}/item/${product.id}`}> {product.title}</NavLink>{" "}
            </div>
            <div>
              Сумма:{" "}
              <span className="summValue">
                {" "}
                ({product.count * product.cost}) BYN
              </span>{" "}
              Кол-во <span className="countValue"> ({product.count})</span>
            </div>
          </div>
          <div>
            <button
              className="btnDeleteItemInCart"
              onClick={() => deleteItemInCart(product)}
            >
              x
            </button>
          </div>
        </div>
      ))
  )
}
