import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../../Context/ProductContext";
import CommentsItems from "./CommentsItems";
import CommentsForm from "./CommentsForm";


function Comments() {
  const {arrComment} = useContext(ProductContext)
  const params = useParams();
  const currentComments = arrComment(params)
  return (
    <div className="App_comments">
      <div className="App_comments_title">
        <span>Отзывы по продукции:</span>
      </div>
      <div className="App_comments_items">
        {currentComments.length === 0 && (
          <div className="App_comments_empty">
            <span>Комментарий нет</span>
          </div>
        )}
       <CommentsItems />
      </div>
      <div>
     <CommentsForm />
      </div>
    </div>
  );
}

export default Comments;
