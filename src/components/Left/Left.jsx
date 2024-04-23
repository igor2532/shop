import React, { useContext, useEffect } from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import ProductContext from "../../Context/ProductContext";
import OrderForm from "../Order/OrderForm";
import CartFull from "../Cart/CartFull";
import Categories from "../Categories/Categories";
import ProductItem from "../Products/ProductItem";
import Products from "../Products/Products";
import Comments from "../Comments/Comments";

export default function Left() {
  const { devUrl,cartproducts } = useContext(ProductContext);
  const navigate = useNavigate()
  useEffect(()=>{
    if(cartproducts.length===0) {
        navigate(`${devUrl}/`);
       }
  },[cartproducts])
  
  return (
    <div className="leftColumn">
      <Categories />
      <Routes>
        <Route
          path={`${devUrl}/item/:id`}
          element={
            <div>
              <ProductItem />
              <div className="App_div_back">
                <NavLink className="btnTourl" to={`${devUrl}/`}>
                  Перейти к продуктам
                </NavLink>
              </div>
              <Comments />
            </div>
          }
        />
        <Route path={`${devUrl}/`} element={<Products />} />
        <Route path={`${devUrl}/order`} element={
          <div>
            <CartFull />
            <OrderForm />
          </div>
        } />
      </Routes>
    </div>
  );
}
