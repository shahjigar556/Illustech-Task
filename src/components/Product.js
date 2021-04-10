import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import {useEffect} from 'react';

function Product({ product, cart }) {
  const [p, setProducts] = useContext(ProductContext);
  
        useEffect(()=>{
            console.log('In useEffect')
        },[product.cartQuantity])


  const addToCart = (id) => {
    console.log("In add to cart function");
    alert(`Book ${id} Added To Cart`);
    console.log(id);
    for (let i = 0; i < p.length; i++) {
      if (p[i]._id == id) {
        console.log(`Here for ${p[i]._id} ${id}`);
        p[i].inCart = true;
        p[i].countInStock--;
        p[i].cartQuantity=1;
        console.log(p);
      }
    }
  };

  const incr=(id)=>{
      console.log(`In incr ${id}`)
     if(product.countInStock>0){
         product.cartQuantity+=1;
         product.countInStock-=1;
     }
     console.log(product.cartQuantity)
     console.log(product.countInStock)
  }

  const decr=(id)=>{
      if(product.cartQuantity==1){
          product.inCart=false;
          product.countInStock+=1;
      }
      else{
          product.countInStock+=1;
          product.cartQuantity-=1;
      }
  }
  return (
    <div className="card">
      <img
        style={{ marginTop: "10px" }}
        src={product.image}
        className="img-container"
      />
      <h3>{product.name}</h3>
      <div className="card-body">
        <p style={{ fontFamily: `'Comfortaa', cursive` }}>
          {product.description}
        </p>
        <div className="price">Price: ${product.price}</div>
        {!cart && (
          <button
            className="cart-btn"
            disabled={product.countInStock == 0}
            onClick={(e) => addToCart(product._id)}
          >
            Add To Cart
          </button>
        )}
        {cart && (
          <div style={{ marginBottom: "10px" }}>
            <button onClick={(e)=>incr(product._id)} style={{ backgroundColor: "#f44336" }}>+</button>{" "}
            {product.cartQuantity}
            <button onClick={(e)=>decr(product._id)} style={{ backgroundColor: "#f44336" }}>-</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
