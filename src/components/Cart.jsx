import React from 'react'

export default function Cart({cartproducts, setCartproducts}) {
  return (
    <div className='Cart_items'>
      {cartproducts.map(
        (product,key)=> (
            <div className='Cart_items_item'>
            {product.title} Кол-во <span className='countValue'> ({product.count})</span>
            </div>
        )
      )}
      <div><button className='clearBtn' onClick={()=>setCartproducts([])}>clear</button></div>
    </div>
  )
}
