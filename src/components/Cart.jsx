import React from 'react'

export default function Cart({cartproducts, setCartproducts}) {
  return (
    <div>
      {cartproducts.map(
        (product,key)=> (
            <div>
            {product.title} Кол-во ({product.count})
            </div>
        )
      )}
      <div><button onClick={()=>setCartproducts([])}>clear</button></div>
    </div>
  )
}
