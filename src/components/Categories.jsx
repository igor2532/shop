import React, { useContext } from "react";
import ProductContext from "../Context/ProductContext";
import { NavLink } from "react-router-dom";

function Categories() {
  const { productsDef, categories, products, setProducts } =
    useContext(ProductContext);
  const newProducts = productsDef.map((item, itemKey) => ({
    ...item,
    count: 0,
  }));
  return (
    <div className="App_categories">
      <NavLink to={"/"}>
        <button
          onClick={() => setProducts(newProducts)}
          className="btnCategory"
        >
          Вся продукция
        </button>
      </NavLink>
      {categories.map((item, key) => (
        <div key={key}>
          <NavLink to={"/"}>
            {" "}
            <button
              onClick={() =>
                setProducts(
                  newProducts.filter((product) => product.cat === item.id)
                )
              }
              className="btnCategory"
            >
              {item.title}
            </button>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default Categories;
