import React, { useContext } from "react";
import ProductContext from "../../Context/ProductContext";
import { useParams } from "react-router-dom";
import CommentItem from "./CommentItem";

export default function CommentsItems() {
  const { arrComment } = useContext(ProductContext);
  const params = useParams();
  const currentComments = arrComment(params);
  return currentComments.map((item, itemKey) => (
    <CommentItem item={item} itemKey={itemKey} />
  ));
}
