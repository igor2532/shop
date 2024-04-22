import React, { useContext } from "react";
import ProductContext from "../../Context/ProductContext";

export default function Testimonials() {
  const { comments } = useContext(ProductContext);
  return (
    <div className="App_testimonials">
      <div className="App_testimonials_title">
        <span>Последние отзывы о продукции:</span>
      </div>
      <div className="App_testimonials_items">
        {comments.map((item, key) => (
          <div key={key} className="App_testimonials_item">
            <div className="App_testimonials_item_user"> <span>{item.user} </span></div>
            <div className="App_testimonials_item_title">{item.title} </div>
            <div className="App_testimonials_item_date">
              <span>{item.date} {item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
