import logo from './logo.svg';
import './App.css';

import Product from './components/product';
import Cart from './components/Cart';
import { useState } from 'react';
import Arr from './data';
import Categories from './components/Categories';
import FormOrder from './components/FormOrder';
import { BrowserRouter, Link, NavLink, Route,Routes } from 'react-router-dom';
import ProductItem from './components/ProductItem';
import Comments from './components/Comments';



function App() {
  //const devUrl = `${process.env.PUBLIC_URL}`
  const devUrl = ``
  const [comments, setComments] = useState(Arr.comments)
  const [products, setProducts] = useState(Arr.products)
  const [categories, setCategories] = useState(Arr.categories)
  const [cartproducts, setCartproducts] = useState([])
  
  const [isCount, setIsCount] = useState(false)
  const [isViewForm, setIsViewForm] = useState(false)
  const [btnState, setBtnState] = useState({
    disabled: false
  })
  return (
    <>

<BrowserRouter>
  <div className='leftColumn'>
  <Categories productsDef = {Arr.products} categories={categories} products={products} setProducts={setProducts} />
<Routes>
  <Route  path={`${devUrl}/item/:id`}   element={
<div>
  <ProductItem btnState={btnState} setIsCount={setIsCount} isCount={isCount} cartproducts={cartproducts} setCartproducts={setCartproducts}  products={products} setProducts={setProducts}  />
  <div className='App_div_back'><NavLink className='btnTourl'     to={`${devUrl}/`}>Перейти к продуктам</NavLink></div>
  <Comments comments={comments} setComments={setComments}  />
</div>
  } />
  <Route path={`${devUrl}/`}   element={
    <div className='App_items'>
        {
          products.map(
            (product, key) => (
          
            
            <Product btnState={btnState} setIsCount={setIsCount} isCount={isCount} cartproducts={cartproducts} key={key} setCartproducts={setCartproducts} product={product} products={products} setProducts={setProducts} />
           
          
            )
          )
        }

      </div>
  } />
 </Routes>
   

 
     

      </div>

      </BrowserRouter>





<div className='rightColumn'>
     {cartproducts.length===0 &&
      <div className='cartEmpty'>
      <span>Корзина пуста</span>
    </div>
     }
      {cartproducts.length > 0 &&
        <div className='cart'>
          <Cart isViewForm={isViewForm} setIsViewForm ={setIsViewForm} setIsCount={setIsCount} isCount={isCount} cartproducts={cartproducts} setCartproducts={setCartproducts} />
           </div>
      }
     
       {cartproducts.length>0 && isViewForm===true &&
       <FormOrder/>
       }

   

</div>


    </>

  );
}

export default App;
