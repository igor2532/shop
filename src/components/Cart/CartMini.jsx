import React, { useContext } from "react";
import ProductContext from "../../Context/ProductContext";
import { NavLink, useNavigate } from "react-router-dom";
import CartItemsMini from "./CartItemsMini";

export default function CartMini() {
 
  const {devUrl,setIsHideCart,isHideCart,sumCost,clearProducts} = useContext(ProductContext);


  return (
    <div className="Cart_items">
      <div className="Cart_items_close"><button onClick={()=>setIsHideCart(!isHideCart)}>x</button></div>
       <CartItemsMini />
      <div className="App_cart_mini_results">
       Итого: {sumCost} BYN
      </div>
    <div className="App_cart_mini_buttons">
      <div>
        <button className="clearBtn" onClick={clearProducts}>
          Очистить корзину
        </button>
      </div>
        <div className="App_cart_order">
        <NavLink className="orderBtn" to={`${devUrl}/order`}>
          Открыть форму заказа
        </NavLink>
      </div>
      </div>


    </div>
  );
}
