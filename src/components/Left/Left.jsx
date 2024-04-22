import React, { useContext } from "react";
import Categories from "../Categories";
import { NavLink, Route, Routes } from "react-router-dom";
import ProductItem from "../ProductItem";
import Comments from "../Comments";
import Products from "../Products";
import ProductContext from "../../Context/ProductContext";
import OrderForm from "../Order/OrderForm";

import CartFull from "../Cart/CartFull";

export default function Left() {
  const { devUrl } = useContext(ProductContext);
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
