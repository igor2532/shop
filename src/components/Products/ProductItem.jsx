import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from "react-router-dom";
import ProductContext from '../../Context/ProductContext';




function ProductItem() {
  const params = useParams()
  const { btnState, setIsCount, isCount, cartproducts, setCartproducts, products, product, setProducts, likes, setLikes, setSumCos,sumCost } = useContext(ProductContext)
  const arrProduct = products.filter((item, itemKey) => item.id == params.id);
  const singleLikes = likes.filter((item, itemKey) => item.idProduct == params.id);
  const arrProductAll = products.filter((item, itemKey) => item.id != params.id);
  const [countValue, setCount] = useState(0);
  const { disabled } = btnState;
  const viewProduct = cartproducts.filter((item, itemKey) => item.id == params.id);
  const allProducts = cartproducts.filter((item, itemKey) => item.id !== params.id);
  const [countLikes, setCountsLikes] = useState(0)
  const PlusToCart = (title, cost) => {
    setSumCos(sumCost+cost)
    setCount(countValue + 1);
    const newArr = [...allProducts, { title: title, count: countValue + 1, cost: cost, id: params.id }].sort((a, b) => a.id > b.id ? 1 : -1)
    setCartproducts([...allProducts, { title: title, count: countValue + 1, cost: cost, id: params.id }])

  }
  const MinusToCart = (title, cost) => {
    setSumCos(sumCost-cost)
    setCount(countValue - 1);
    const newArr = [...allProducts, { title: title, count: countValue - 1, cost: cost, id: params.id }].sort((a, b) => a.id > b.id ? 1 : -1)
    setCartproducts(newArr)
  }
  useEffect(() => {
    document.title = "Название продукта";
    setIsCount(true)

  }
    , [])

  const addLike = (item) => {

    setCountsLikes(singleLikes.length + 1);
    setLikes([...likes, { id: likes.length + 1, idProduct: params.id }])

  }

  return (

    <>
      {arrProduct.length > 0 &&
        arrProduct.map((item, key) => (

          <div key={key} className='App_item'>
            


            <div className='App_item_left'>
            <div className='App_item_img'><img src={item.url} /></div>
            </div>


       <div className="App_item_right">
            <div className='App_item_like'> <button onClick={() => addLike(item)}><i class="material-icons">favorite</i> </button><span>{singleLikes.length > 0 ? singleLikes.length : ''}</span></div>
            <div className='App_item_title'><span> {item.title}</span></div>
            <div className='App_item_cost'><span className='costPrefix'>Цена:  </span>  <span className='costValue'>{item.cost} BYN </span></div>
            <div className='App_controls'><button disabled={!isCount !== false ? !disabled : countValue < 2} onClick={() => MinusToCart(item.title, item.cost)} className='decrBtn'>-</button><span className='countClass'>{isCount !== true ? 0 : countValue}</span><button
              disabled={!isCount !== false ? disabled : countValue > 9}
              onClick={() => PlusToCart(item.title, item.cost)} className='incrBtn'>+</button></div>
       </div>

          </div>

        ))
      }
      {arrProduct.length == 0 &&

        <div className='App_item_error'>Error 404</div>}
    </>
  )


}

export default ProductItem
