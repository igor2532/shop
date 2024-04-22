import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Arr from './data';
import { BrowserRouter, Link, NavLink, Route,Routes } from 'react-router-dom';
import ProductContext from './Context/ProductContext';
import Right from './components/Right/Right';
import Left from './components/Left/Left';
import ReactPaginate from 'react-paginate';



function App() {
  const devUrl = `${process.env.PUBLIC_URL}`
  // const devUrl = ``
  const [comments, setComments] = useState(Arr.comments)
  const [products, setProducts] = useState(Arr.products)
  const [categories, setCategories] = useState(Arr.categories)
  const [cartproducts, setCartproducts] = useState([])
   const [isCount, setIsCount] = useState(false)
  const [isViewForm, setIsViewForm] = useState(false)
  const [btnState, setBtnState] = useState({
    disabled: false
  })

  const ProductsObjectContext = {
    //for Categories
    productsDef:Arr.products,categories:categories,products:products,setProducts:setProducts,
    //for ProductItem
    btnState:btnState,setIsCount:setIsCount,isCount:isCount,cartproducts:cartproducts,setCartproducts:setCartproducts
    //for Comments
    ,comments:comments, setComments:setComments
    //for Cart
    ,isViewForm:isViewForm, setIsViewForm:setIsViewForm, 
    //for Left
    devUrl:devUrl
   }

  


  return (
    <>
<ProductContext.Provider value={ProductsObjectContext}>
<BrowserRouter>
<Left />
 </BrowserRouter>
<Right />
</ProductContext.Provider>
 </>

  );
}

export default App;
