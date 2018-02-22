import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './navigation.css'
import Home from '../home/home'
import New from '../new/new'
import Products from '../products/products'


const Navigation = () => (
        <Router>
            <div>
                <ul className='nav'>
                    <li>
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link to="/new" className="link">New</Link>
                    </li>
                    <li>
                        <Link to="/products" className="link">Products</Link>
                    </li>
                </ul>

                <hr />

                <Route exact path="/" component={Home} />
                <Route path="/new" component={New} />
                <Route path="/products" component={Products} />
                {/* <Route path="/promo" component={Promo} /> */}
                {/* <Route path="/contact" component={Contact} /> */}
                {/* <Route path="/about" component={About} /> */}
            </div>
        </Router>
    )

export default Navigation
