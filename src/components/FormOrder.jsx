import React from "react";

function FormOrder() {
  return (
    <>
      <form className="App_form">
        <div>
          {" "}
          <input placeholder="Введите свое имя" />
        </div>
        <div>
          {" "}
          <input placeholder="Введите свой телефон" />
        </div>
        <div>
          <button className="orderBtn">Оформить заказ</button>
        </div>
      </form>
    </>
  );
}

export default FormOrder;
