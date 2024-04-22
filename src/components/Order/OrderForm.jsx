import React from "react";

export default function OrderForm() {
  return (
    <>
      <div className="App_order_form">
        <div>
          <span className="App_order_title">
            Заполните пожалуйста форму заказа:
          </span>
        </div>
        <div>
          <input placeholder="Введите имя" />
        </div>
        <div>
          <input placeholder="Введите адрес" />
        </div>
        <div>
          <input placeholder="Телефон" />
        </div>
        <div>
          <input placeholder="email" />
        </div>
        <div className="App_order_form_btn">
          <button onClick={() => alert("Товары заказаны")}>Отправить</button>
        </div>
      </div>
    </>
  );
}
