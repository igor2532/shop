import React, { useContext, useEffect, useMemo, useState } from 'react'
import {   useParams   } from "react-router-dom";
import ProductContext from '../Context/ProductContext';
  


function ProductItem() {
    const params = useParams()
    const {btnState,setIsCount,isCount,cartproducts,setCartproducts,products,product, setProducts} = useContext(ProductContext)
    const arrProduct = products.filter((item,itemKey) => item.id == params.id);
   const [countValue, setCount] = useState(0); 
    const {disabled} = btnState;
    const viewProduct = cartproducts.filter((item,itemKey) => item.id == params.id);
    const allProducts = cartproducts.filter((item,itemKey) => item.id !== params.id);
 
    const PlusToCart = (title,cost) => {
      setCount(countValue+1);
     
      setCartproducts([...allProducts,{title:title,count:countValue+1,cost:cost, id:params.id}])
     
    }
    const MinusToCart = (title,cost) => {
      setCount(countValue-1);
      
    setCartproducts([...allProducts,{title:title,count:countValue-1,cost:cost, id:params.id}])
     }
     useEffect(()=> {
    
       setIsCount(true)
      
      }
      ,[])
   return (
       arrProduct.map((item,key)=>(
        <>
        <div className='App_item'>
        <div className='App_item_img'><img src={item.url}/></div>
          <div className='App_item_title'><span> {item.title}</span></div>  
         <div className='App_item_cost'><span className='costPrefix'>Цена:  </span>  <span className='costValue'>{item.cost} BYN </span></div>
         <div className='App_controls'><button disabled={!isCount!==false?!disabled:countValue<2} onClick={()=>MinusToCart(item.title,item.cost)} className='decrBtn'>-</button><span className='countClass'>{ isCount!==true?0:countValue }</span><button 
    disabled={!isCount!==false?disabled:countValue>9}
    onClick={()=>PlusToCart(item.title,item.cost)} className='incrBtn'>+</button></div>

           </div>
        </>
       ))
   )


}

export default ProductItem
