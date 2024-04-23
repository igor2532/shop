import React, { useContext } from "react";
import CartMini from "../Cart/CartMini";
import ProductContext from "../../Context/ProductContext";

export default function Right() {
  const { cartproducts, isViewForm, isHideCart,setIsHideCart,sumCost } = useContext(ProductContext);
  return (
    <div className="rightColumn">
      {cartproducts.length === 0 && (
        <div className="cartEmpty">
          <span>Корзина пуста</span>
        </div>
      )}
      {cartproducts.length > 0 && !isHideCart  && (
        <div className="cart">
          <CartMini />
        </div>
      )}

    {cartproducts.length > 0 && isHideCart && (
        <div className="cart hidecart">
       <div> <button onClick={()=>setIsHideCart(!isHideCart)}>{cartproducts.length} товара(ов) на сумму {sumCost} BYN</button>
        </div> </div>
      )}

 
    </div>
  );
}
