import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../../Context/ProductContext";

export default function CommentsForm() {
  const { setNameValue, setTextValue, addComment, textValue, nameValue } =
    useContext(ProductContext);
  const params = useParams();
  return (
    <form className="App_form">
      <div>
         <input
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          placeholder="Введите свое имя"
        />
      </div>
      <textarea
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        placeholder="Введите комментарий"
      ></textarea>

      <div>
        <button onClick={(e) => addComment(e, params)} className="orderBtn">
          Отправить
        </button>
      </div>
    </form>
  );
}
