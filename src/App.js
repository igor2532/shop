import logo from './logo.svg';
import './App.css';
import Product from './components/product';
import Cart from './components/Cart';
import { useState } from 'react';
import Arr from './data';



function App() {



const [products, setProducts] = useState(Arr.products)

const [cartproducts, setCartproducts] = useState([])

  return (
    <>
   
      <div className='App_items'> 
   {
    products.map(
      (product,key)=> (
<Product cartproducts={cartproducts} key={key}  setCartproducts={setCartproducts} product= {product} products={products} setProducts={setProducts} />
      )
    )
   }
   
  </div>
   
 

 
 
  
 {cartproducts.length>0 && 
<div className='cart'>  
  <Cart cartproducts ={cartproducts} setCartproducts={setCartproducts}/>
</div>
}
</>

  );
}

export default App;
