import React, { useContext } from 'react'
import Product from '../components/Product';
import { ProductContext } from '../components/ProductContext';
import Header from '../components/Header';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';

function Cart() {
    const [product,setProducts]=useContext(ProductContext);
    const cartProducts=product.filter(p=>p.inCart==true);
    let cost=0;
    useEffect(()=>{
        console.log('In useEffect')
    },[product])
    console.log(cartProducts);
    useEffect(()=>{
       console.log('In useEffect')
    },[product,cartProducts])
    if(cartProducts.length==0){
        return (
            <React.Fragment>
                <h2 style={{textAlign:'center',fontFamily: `'Dela Gothic One', cursive`}}>Cart is Currently Empty</h2>
                <div style={{textAlign:'center'}}>
                    <Link to='/'>
                        <button className="cart-btn">Add Books</button>
                    </Link>
                </div>
            </React.Fragment>

        )
    }
    for(let i=0;i<cartProducts.length;i++){
        cost+=cartProducts[i].price*cartProducts[i].cartQuantity;
    }
    return (
        <React.Fragment>
            <Header />
            <h2 style={{textAlign:'center',fontFamily: `'Dela Gothic One', cursive`}}>Cart Products</h2>
            <div className="product">
                {cartProducts.map(product=><Product key={product._id} product={product} cart={true} />)}
            </div>
            <div className="cost">
                Cost:$ {cost.toFixed(2)}
            </div>
        </React.Fragment>
    )
}

export default Cart
