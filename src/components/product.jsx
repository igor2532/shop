import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import ProductContext from '../Context/ProductContext';

export default function Product({product}) {

  //  const [count, setCount] = useState(0); 
  const {btnState,setIsCount,isCount,cartproducts,setCartproducts,products,setProducts} = useContext(ProductContext)

const {disabled} = btnState;
const allProducts = cartproducts.filter((item,itemKey) => item.id !== product.id);

const PlusToCart = () => {
  product.count++;
  setCartproducts([...allProducts,{...product,count:product.count}])

  
}
const MinusToCart = () => {
  product.count--;
  setCartproducts([...allProducts,{...product,count:product.count}])

  }

useEffect(()=> {
if(product.count!==0) {
 setIsCount(true)
}
}
,[product.count])





  return (
    <div  key={product.key} className='App_product_item'>
    <div className='App_img'> <NavLink to={`item/${product.id}`}><img style={{width:'200px'}} src={product.url}/></NavLink> </div>
    <div className="itemTitle"><NavLink to={`item/${product.id}`}><span>{product.title} </span></NavLink></div>
    <div className='App_controls'><button disabled={!isCount!==false?!disabled:product.count<2} onClick={MinusToCart} className='decrBtn'>-</button><span className='countClass'>{ isCount!==true?0:product.count }</span><button 
    disabled={!isCount!==false?disabled:product.count>9}
    onClick={PlusToCart} className='incrBtn'>+</button></div>

 

    </div>
  )
}
