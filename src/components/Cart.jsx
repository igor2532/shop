import React from 'react'

export default function Cart({isViewForm,setIsViewForm,setIsCount,cartproducts, setCartproducts}) {


const clearProducts = () => {
  cartproducts.map((item,itemKey)=>
  (
    {...item,count:0}
  )
  )
  setCartproducts([])
  setIsCount(false)
  
}

  return (
    <div className='Cart_items'>
      {cartproducts.map(
        (product,key)=> (
            <div className='Cart_items_item'>
            {product.title} Кол-во <span className='countValue'> ({product.count})</span>
            </div>
        )
      )}
      <div><button className='clearBtn' onClick={clearProducts}>Очистить корзину</button></div>
      <div><button className='orderBtn' onClick={()=>setIsViewForm(!isViewForm)}>Открыть форму заказа</button></div>
    </div>
  )
}
