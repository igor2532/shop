import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ProductContext from "../../Context/ProductContext";
import CategoriesItems from "./CategoriesItems";
import HomeLink from "./HomeLink";

function Categories() {
  const { productsDef, categories, products, setProducts ,devUrl,newProducts} =
    useContext(ProductContext);
 
  return (
    <div className="App_categories">
       <HomeLink />
      <CategoriesItems/>
    </div>
  );
}

export default Categories;
