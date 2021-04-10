import React from 'react'
import {useContext} from 'react';
import {ProductContext} from '../components/ProductContext';
import Header from '../components/Header';
import Product from '../components/Product';

function Landing() {
    const [products,setProducts]=useContext(ProductContext);
    console.log(products)
    console.log(`In landing`)
    return (
        <React.Fragment>
            <Header />
            <h2 style={{textAlign:'center',fontFamily: `'Dela Gothic One', cursive`}}>Our Books</h2>
            <div className="product">
                {products.map(product=><Product key={product._id} product={product} cart={false} />)}
            </div>
        </React.Fragment>
    )
}

export default Landing
