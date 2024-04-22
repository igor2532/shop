import React, { useContext } from "react";
import ProductContext from "../../Context/ProductContext";
import { NavLink, useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const {
    isViewForm,
    setIsViewForm,
    setIsCount,
    cartproducts,
    setCartproducts,
    products,
    setProducts,
    productsDef,
  } = useContext(ProductContext);
  const clearProducts = () => {
    cartproducts.map((item, itemKey) => ({ ...item, count: 0 }));
    const newProducts = productsDef.map((item, itemKey) => ({
      ...item,
      count: 0,
    }));
    setProducts([...newProducts]);
    setCartproducts([]);
    setIsCount(false);
    navigate("/");
  };

  const deleteItemInCart = (id) => {
    const allProducts = cartproducts.filter((item, itemKey) => item.id !== id);
    setCartproducts([...allProducts]);
    if (allProducts.length == 0) {
      clearProducts();
    }
  };

  return (
    <div className="Cart_items">
      {cartproducts.map((product, key) => (
        <div className="Cart_items_item">
          <div>
            <div>
              {" "}
              <NavLink to={`item/${product.id}`}> {product.title}</NavLink>{" "}
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
              onClick={() => deleteItemInCart(product.id)}
            >
              x
            </button>
          </div>
        </div>
      ))}
      <div>
        <button className="clearBtn" onClick={clearProducts}>
          Очистить корзину
        </button>
      </div>
      {/* <div><button className='orderBtn' onClick={()=>setIsViewForm(!isViewForm)}>Открыть форму заказа</button></div> */}
      <div className="App_cart_order">
        <NavLink className="orderBtn" to="/order">
          Открыть форму заказа
        </NavLink>
      </div>
    </div>
  );
}
