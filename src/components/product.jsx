import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import ProductContext from '../Context/ProductContext';

export default function Product({product}) {

  //  const [count, setCount] = useState(0); 
  const {btnState,setIsCount,isCount,cartproducts,setCartproducts,products,setProducts,likes,setLikes,sumCost,setSumCos} = useContext(ProductContext)

const {disabled} = btnState;
const allProducts = cartproducts.filter((item,itemKey) => item.id !== product.id);
const otherProducts = products.filter((item,itemKey) => item.id != product.id);
const singleLikes = likes.filter((item,itemKey) => item.idProduct == product.id);
const PlusToCart = () => {
  product.count++;
  setSumCos(sumCost+product.cost)
  const newArr =   [...allProducts,{...product,count:product.count}].sort((a, b) => a.id > b.id ? 1 : -1)
  setCartproducts(newArr)

  
}
const MinusToCart = () => {

  setSumCos(sumCost-product.cost)
 
  product.count--;
  const newArr =   [...allProducts,{...product,count:product.count}].sort((a, b) => a.id > b.id ? 1 : -1)
  setCartproducts(newArr)

  }

useEffect(()=> {
if(product.count!==0) {
 setIsCount(true)
}
}
,[product.count,product.likes])


const addLike = (item) => {
      
 
   setLikes([...likes,{id:singleLikes.length+1,idProduct:product.id}])
    
   }


  return (
    <div  key={product.key} className='App_product_item'>
       <div>
    <div className='App_item_like'> <button onClick={addLike}><i class="material-icons">favorite</i> </button><span>{singleLikes.length>0?singleLikes.length:''}</span></div>
    </div>
    
    <div className='App_img'> <NavLink to={`item/${product.id}`}><img style={{width:'200px'}} src={product.url}/></NavLink> </div>
    <div className="itemTitle"><NavLink to={`item/${product.id}`}><span>{product.title} </span></NavLink></div>
    <div className="App_item_cost"><span className='App_item_cost_span_prefix'>Цена: </span> <span className='App_item_cost_span_costvalue'> {product.cost} BYN</span> </div>
    <div className='App_controls'>
      <div>
      <button disabled={!isCount!==false?!disabled:product.count<2} onClick={MinusToCart} className='decrBtn'>-</button><span className='countClass'>{ isCount!==true?0:product.count }</span><button 
    disabled={!isCount!==false?disabled:product.count>9}
    onClick={PlusToCart} className='incrBtn'>+</button>
    </div>
   
    </div>

 

    </div>
  )
}
