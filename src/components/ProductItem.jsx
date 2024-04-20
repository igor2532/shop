import React, { useMemo, useState } from 'react'
import {   useParams   } from "react-router-dom";
  


function ProductItem({btnState,setIsCount,isCount,cartproducts,setCartproducts,products,product, setProducts}) {
    const params = useParams()
    console.log(params.id)
    const arrProduct = products.filter(item => item.id == params.id);
    const [count, setCount] = useState(0); 
    const {disabled} = btnState;
    const PlusToCart = () => {
      setCount(count+1)
    
    
    }
    const MinusToCart = () => {
      setCount(count-1)
      
     }
    
   return (
       arrProduct.map((item,key)=>(
        <>
        <div className='App_item'>
        <div className='App_item_img'><img src={item.url}/></div>
          <div className='App_item_title'><span> {item.title}</span></div>  
         <div className='App_item_cost'><span className='costPrefix'>cost  </span>  <span className='costValue'>${item.cost} </span></div>

         <div className='App_controls'><button disabled={!isCount!==false?!disabled:count<2} onClick={MinusToCart} className='decrBtn'>-</button><span className='countClass'>{ isCount!==true?0:count }</span><button 
    disabled={!isCount!==false?disabled:count>9}
    onClick={PlusToCart} className='incrBtn'>+</button></div>

           </div>
        </>
       ))
   )


}

export default ProductItem
