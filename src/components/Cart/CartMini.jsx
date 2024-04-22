import React, { useContext } from "react";
import ProductContext from "../../Context/ProductContext";
import { NavLink, useNavigate } from "react-router-dom";

export default function CartMini() {
 
  const {
    isViewForm,
    setIsViewForm,
    setIsCount,
    cartproducts,
    setCartproducts,
    products,
    setProducts,
    productsDef,
    devUrl,
    setIsHideCart,
    isHideCart,
    sumCost,
    setSumCos
    
   
  } = useContext(ProductContext);
  
const navigate = useNavigate()
  const deleteItemInCart = (product) => {
    setSumCos(sumCost-(product.count*product.cost))
    const allProducts = cartproducts.filter((item, itemKey) => item.id !== product.id);
    setCartproducts([...allProducts]);
    if (allProducts.length == 0) {
      clearProducts();
    }
  };
  const clearProducts = () => {
    setSumCos(0)
    const newProducts = productsDef.map((item, itemKey) => ({
      ...item,
      count: 0,
    }));
    setProducts([...newProducts]);
    setCartproducts([]);
    setIsCount(false);
    navigate(`${devUrl}/`);
  };
  return (
    <div className="Cart_items">
      <div className="Cart_items_close"><button onClick={()=>setIsHideCart(!isHideCart)}>x</button></div>
      {cartproducts.map((product, key) => (
        <div className="Cart_items_item">
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
      ))}
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
