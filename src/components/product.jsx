import React, { useEffect, useState } from 'react'

export default function Product({cartproducts,setCartproducts,products,product, setProducts}) {

   const [count, setCount] = useState(0); 

const PlusToCart = () => {
  setCount(count+1)

}
const MinusToCart = () => {
  setCount(count-1)
 }


useEffect(()=>
setCartproducts([...cartproducts, {...product,count:count}]),[count]
)

  return (
    <div key={product.key} className='App_product_item'>
    <div className='App_img'><img style={{width:'200px'}} src='https://w7.pngwing.com/pngs/526/289/png-transparent-pirozhki-melonpan-croissant-danish-pastry-food-bun-baked-goods-food-danish-pastry.png'/></div>
    <div className='App_controls'><button disabled={count<2} onClick={MinusToCart} className='decrBtn'>-</button><span>{product.title} </span><span className='countClass'>{count}</span><button 
    disabled={count>9}
    onClick={PlusToCart} className='incrBtn'>+</button></div>

 

    </div>
  )
}
