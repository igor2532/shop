import React, { useContext, useEffect, useState } from 'react'
import ProductContext from '../Context/ProductContext'
import Product from './product'
import ReactPaginate from 'react-paginate'
import Testimonials from './Testimonials/Testimonials'

export default function Products() {

    const {products,setProducts,productsDef} = useContext(ProductContext)
    const [inputValue, setInputValue] = useState('')
    const searchProductForInput = (e) => {
        setInputValue(e.target.value)
        const newArr =  productsDef.filter(item => item.title.toUpperCase().includes(inputValue.toUpperCase()));
        setProducts([...newArr])
    }
    useEffect(() => {
        document.title = "Список продуктов";
      }, []);
  
  return (

    <>
    <div className='App_search'>
       <input defaultValue={''} onChange={(e)=>searchProductForInput(e)} placeholder='Введите название товара' />
    </div>
 <PaginatedItems itemsPerPage={12} products={products} />   
   <Testimonials />
 </>
  )
}

function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((product,key) => (
            <Product  key={key} product={product} />
          ))}
      </>
    );
  }


function PaginatedItems({ itemsPerPage,products }) {
 
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % products.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  
    return (
     <>
      <div className='App_items'>
        <Items currentItems={currentItems} />
        </div>
      <div className='App_paginate'><ReactPaginate
          breakLabel="..."
          className='pagination_ul'
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}/></div>   
        </>
     
    );
  }




