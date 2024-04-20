import React from 'react'

function Categories({ productsDef,categories,products,setProducts }) {

    return (
        <div className='App_categories'>
             <button onClick={()=>setProducts(productsDef)} className='btnCategory' >Вся продукция</button>
        {categories.map((item,key)=>(
          <div key={key}>
            <button onClick={()=>setProducts(productsDef.filter(product => product.cat === item.id))} className='btnCategory' >{item.title}</button>
            </div>
        ))}
      </div>
    )
}

export default Categories
