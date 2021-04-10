import React, { createContext } from 'react'
import {useState,useContext} from 'react';
import books from '../books';

export const ProductContext=createContext();
export const ProductProvider=(props)=>{
   const [products,setProducts]=useState(books);
   return(
       <ProductContext.Provider value={[products,setProducts]}>
           {props.children}
       </ProductContext.Provider>
   )
}