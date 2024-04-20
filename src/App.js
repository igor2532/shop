import logo from './logo.svg';
import './App.css';
import Product from './components/product';
import Cart from './components/Cart';
import { useState } from 'react';



function App() {

const arr = [
  {id:1, title: 'Пирожок с повидлом',cost: 300,count:0},
  {id:2, title: 'Пирожок со сгущенкой',cost: 400,count:0},
  {id:3, title: 'Пирожок с капустой',cost: 500,count:0}
]

const [products, setProducts] = useState(arr)

const [cartproducts, setCartproducts] = useState([])

  return (
    <div className="App">
      <div> 
   {
    products.map(
      (product,key)=> (
<Product cartproducts={cartproducts}  setCartproducts={setCartproducts} product= {product} products={products} setProducts={setProducts} />
      )
    )
   }
   
    </div>
    <div>
      <Cart cartproducts ={cartproducts} setCartproducts={setCartproducts}/>
    </div>
    </div>
  

  );
}

export default App;
