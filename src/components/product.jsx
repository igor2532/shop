import React, { useEffect, useState } from 'react'

export default function Product({cartproducts,key,setCartproducts,products,product, setProducts}) {

   const [count, setCount] = useState(0); 

const PlusToCart = () => {
  setCount(count+1)


}
const MinusToCart = () => {
  setCount(count-1)
  
 }


useEffect(()=> {
 const newProducts = cartproducts.filter(item => item.id !== product.id);
//  newProducts.push({...product, count:count})
// cartproducts.filter(item => item.id !== product.id);
if(count!==0) {
setCartproducts([...newProducts,{...product, count:count}])
}
}
,[count])





  return (
    <div key={product.key} className='App_product_item'>
    <div className='App_img'><img style={{width:'200px'}} src={product.url}/></div>
    <div className="itemTitle"><span>{product.title} </span></div>
    <div className='App_controls'><button disabled={count<2} onClick={MinusToCart} className='decrBtn'>-</button><span className='countClass'>{count}</span><button 
    disabled={count>9}
    onClick={PlusToCart} className='incrBtn'>+</button></div>

 

    </div>
  )
}
