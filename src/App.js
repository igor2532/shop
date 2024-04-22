import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Arr from './data';
import { BrowserRouter, Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import ProductContext from './Context/ProductContext';
import Right from './components/Right/Right';
import Left from './components/Left/Left';
import ReactPaginate from 'react-paginate';


function App() {
  // const navigate = useNavigate()
  const devUrl = `${process.env.PUBLIC_URL}`
  // const devUrl = ``
  const [likes, setLikes] = useState(Arr.likes)
  const [comments, setComments] = useState(Arr.comments)
  const [products, setProducts] = useState(Arr.products)
  const [categories, setCategories] = useState(Arr.categories)
  const [cartproducts, setCartproducts] = useState([])
  const [isCount, setIsCount] = useState(false)
  const [isViewForm, setIsViewForm] = useState(false)
  const [isHideCart, setIsHideCart] = useState(true)
  const [sumCost, setSumCos] = useState(0);
  const [btnState, setBtnState] = useState({
    disabled: false
  })
  
  

  const ProductsObjectContext = {
    //for Categories
    productsDef: Arr.products, categories: categories, products: products, setProducts: setProducts,
    //for ProductItem
    btnState: btnState, setIsCount: setIsCount, isCount: isCount, cartproducts: cartproducts, setCartproducts: setCartproducts
    //for Comments
    , comments: comments, setComments: setComments
    //for Cart
    , isViewForm: isViewForm, setIsViewForm: setIsViewForm,
    //for Left
    devUrl: devUrl,
    //for other
    likes: likes, setLikes: setLikes,
    isHideCart:isHideCart, setIsHideCart:setIsHideCart,
    //for carts
    sumCost:sumCost, setSumCos:setSumCos
  }




  return (
    <>
      <ProductContext.Provider value={ProductsObjectContext}>
        <BrowserRouter>
          <Left />
          <Right />
        </BrowserRouter>
      </ProductContext.Provider>
    </>

  );
}

export default App;
