import React, { useContext } from 'react'
import ProductContext from '../Context/ProductContext'

function Categories() {
const {productsDef,categories,products,setProducts} = useContext(ProductContext)
const newProducts = productsDef.map((item,itemKey)=>({...item,count:0}))
    return (
        <div className='App_categories'>
             <button onClick={()=>setProducts(newProducts)} className='btnCategory' >Вся продукция</button>
        {categories.map((item,key)=>(
          <div key={key}>
            <button onClick={()=>setProducts(newProducts.filter(product => product.cat === item.id))} className='btnCategory' >{item.title}</button>
            </div>
        ))}
      </div>
    )
}

export default Categories
