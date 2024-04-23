import './App.css';
import Arr from './data';
import { BrowserRouter} from 'react-router-dom';
import ProductContext from './Context/ProductContext';
import Right from './components/Right/Right';
import Left from './components/Left/Left';
import { useState } from 'react';
import { Provider} from 'react-redux';
import store from './store';




function App() {
 

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
  //for Comments {
  const [textValue, setTextValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  // }
  const [btnState, setBtnState] = useState({
    disabled: false
  })
  
  
  //funtions
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
      const newProducts = Arr.products.map((item, itemKey) => ({
          ...item,
          count: 0,
        }));
        setProducts([...newProducts]);
      setCartproducts([]);
      setIsCount(false);
    
    };

    const newProducts = Arr.products.map((item, itemKey) => ({
      ...item,
      count: 0,
    }));
  
     //functions for comments
     const arrComment = (params) => {
     return comments.filter((item) => item.idProduct == params.id);
     }
     const addComment = (e,params) => {
    
       e.preventDefault();
   
       if (
         nameValue !== "" &&
         nameValue != "" &&
         textValue !== "" &&
         textValue != ""
       ) {
    
         setComments([
           ...comments,
           { user: nameValue, title: textValue, idProduct: params.id, likes: 0,date:new Date().toISOString().split('T')[0], time:new Date().toISOString().split('T')[1]  },
         ]);
         setTextValue('')
         setNameValue('')
       }
     };

     // }





  const ProductsObjectContext = {
   
  
    //for Categories
    productsDef: Arr.products, categories: categories, products: products, setProducts: setProducts,newProducts:newProducts,
    //for ProductItem
    btnState: btnState, setIsCount: setIsCount, isCount: isCount, cartproducts: cartproducts, setCartproducts: setCartproducts
    //for Comments
    , comments: comments, setComments: setComments, textValue:textValue, setTextValue:setTextValue,setNameValue:setNameValue,addComment:addComment, arrComment:arrComment
    //for Cart
    , isViewForm: isViewForm, setIsViewForm: setIsViewForm,
    //for Left
    devUrl: devUrl,
    //for other
    likes: likes, setLikes: setLikes,
    isHideCart:isHideCart, setIsHideCart:setIsHideCart,
    //for carts
    sumCost:sumCost, setSumCos:setSumCos,
    //for cart actions
    clearProducts:clearProducts, deleteItemInCart:deleteItemInCart,minusProduct:minusProduct,plusProduct:plusProduct,
    //for categories
  }


  return (
    <>


       <Provider store={store}>
      <ProductContext.Provider value={ProductsObjectContext}>
        <BrowserRouter>
          <Left />
          <Right />
        </BrowserRouter>
      </ProductContext.Provider>
       </Provider>
    </>



  );
}

export default App;
