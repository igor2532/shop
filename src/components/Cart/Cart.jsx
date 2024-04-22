import React, { useContext } from 'react'
import ProductContext from '../../Context/ProductContext'


export default function Cart() {

const {isViewForm,setIsViewForm,setIsCount,cartproducts, setCartproducts,products,setProducts,productsDef} = useContext(ProductContext)
const clearProducts = () => {
  cartproducts.map((item,itemKey)=>({...item,count:0}))
  const newProducts = productsDef.map((item,itemKey)=>({...item,count:0}))
  setProducts([...newProducts])
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
