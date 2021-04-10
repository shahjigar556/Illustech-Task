import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <React.Fragment>
            <div className="navbar">
              <div className="navbar-center">
                    <h3>
                        <Link to ='/' style={{textDecoration:'none',color:'white'}}>
                                BookStore
                        </Link>
                    </h3>
                    <div style={{padding:'20px'}}>
                        <Link to={`/cart`} style={{textDecoration:'none',color:'white'}}>
                            Cart
                        </Link>
                    </div>
              </div>
                <div style={{marginRight:'10px'}}>
                    <a href="mailto:shahjigar185@gmail.com">
                       Mail
                    </a>
                </div>
            </div>
           
        </React.Fragment>
    )
}

export default Header
