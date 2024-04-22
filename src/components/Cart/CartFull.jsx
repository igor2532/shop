import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import ProductContext from '../../Context/ProductContext'

function CartFull() {


    const navigate = useNavigate()
    const {cartproducts,devUrl,setCartproducts,productsDef,setProducts,setIsCount,sumCost,
     setSumCos} = useContext(ProductContext) 
    const plusProduct = (product) => {
      setSumCos(sumCost+product.cost)
     const allProducts = cartproducts.filter((item, itemKey) => item.id !== product.id);
     product.count++
     const newArr = [...allProducts,{...product,id:product.id,count:product.count}].sort((a, b) => a.id > b.id ? 1 : -1)
     setCartproducts(newArr);
    }
    const deleteItemInCart = (product) => {
        setSumCos(sumCost-(product.count*product.cost))
        const allProducts = cartproducts.filter((item, itemKey) => item.id !== product.id);
        setCartproducts([...allProducts]);
        if (allProducts.length == 0) {
          clearProducts();
        }
      };
    const minusProduct = (product) => {
        setSumCos(sumCost-product.cost)
        const allProducts = cartproducts.filter((item, itemKey) => item.id !== product.id);
        product.count--
        const newArr = [...allProducts,{...product,id:product.id,count:product.count}].sort((a, b) => a.id > b.id ? 1 : -1)
        setCartproducts(newArr);
       }
       const clearProducts = () => {
        setSumCos(0)
        const newProducts = productsDef.map((item, itemKey) => ({
            ...item,
            count: 0,
          }));
          setProducts([...newProducts]);
        setCartproducts([]);
        setIsCount(false);
        navigate(`${devUrl}/`);
      };
    return (
   <div className='App_cart_full'>
    <div className='App_cart_full_title'>
        <h1>Корзина</h1>
    </div>
   <div className="App_cart_full_items">
      {cartproducts.map((product, key) => (
        <div className="App_cart_full_items_item">
        <div className='App_cart_full_items_item_thumb'><img src={product.url} /></div>
        <div className='App_cart_full_items_item_title'> <NavLink to={`${devUrl}/item/${product.id}`}> {product.title}</NavLink></div>
        <div className='App_cart_full_items_cost'>{product.cost} BYN</div>
        <div className='App_cart_full_items_counts'><button disabled={product.count>1?false:true} onClick={()=>minusProduct(product)}>-</button>{product.count} шт<button disabled={product.count<10?false:true} onClick={()=>plusProduct(product)}>+</button></div>
        <div className='App_cart_full_items_sum'>{product.cost*product.count} BYN</div>
        <div className='App_cart_full_items_item_delete'><button onClick={() => deleteItemInCart(product)} className='btnDeleteItemInCart'>x</button></div>
        </div>
      ))}
    
    </div>
      <div className='App_cart_full_results'>Итого: {sumCost} BYN</div>
      <div className='App_cart_full_clear'>
        <button onClick={clearProducts}  className="clearBtn" >
          Очистить корзину
        </button>
      </div>
   </div>      
    )
}

export default CartFull
