import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Product({btnState,setIsCount,isCount,cartproducts,key,setCartproducts,products,product, setProducts}) {

   const [count, setCount] = useState(0); 
const {disabled} = btnState;
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
setIsCount(true)
setCartproducts([...newProducts,{...product, count:count}])
}
}
,[count])





  return (
    <div  key={product.key} className='App_product_item'>
    <div className='App_img'> <NavLink to={`item/${product.id}`}><img style={{width:'200px'}} src={product.url}/></NavLink> </div>
    <div className="itemTitle"><NavLink to={`item/${product.id}`}><span>{product.title} </span></NavLink></div>
    <div className='App_controls'><button disabled={!isCount!==false?!disabled:count<2} onClick={MinusToCart} className='decrBtn'>-</button><span className='countClass'>{ isCount!==true?0:count }</span><button 
    disabled={!isCount!==false?disabled:count>9}
    onClick={PlusToCart} className='incrBtn'>+</button></div>

 

    </div>
  )
}
