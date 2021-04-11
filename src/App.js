import './App.css';
import React from 'react'
import {ProductProvider} from './components/ProductContext';
import {Route,Switch} from 'react-router-dom'
import Landing from './pages/Landing';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <ProductProvider>
          <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/cart' component={Cart} />
          </Switch>
       </ProductProvider>
       <Footer />
    </React.Fragment>
  );
}

export default App;
