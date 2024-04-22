import React, { useContext } from 'react'
import Cart from '../Cart/Cart'
import FormOrder from '../FormOrder'
import ProductContext from '../../Context/ProductContext'

export default function Right() {
const {cartproducts,isViewForm} = useContext(ProductContext)
  return (
    <div className='rightColumn'>
    {cartproducts.length===0 &&
     <div className='cartEmpty'>
     <span>Корзина пуста</span>
   </div>
    }
     {cartproducts.length > 0 &&
       <div className='cart'>
         <Cart  />
          </div>
     }
    
      {cartproducts.length>0 && isViewForm===true &&
      <FormOrder/>
      }

  

</div>
  )
}
