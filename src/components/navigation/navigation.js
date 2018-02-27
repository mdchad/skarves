import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './navigation.css'
import { Home, New, Products } from '../main/main'



const Navigation = () => (
        <Router>
            <div>
                <ul className='nav'>
                    <li></li>
                    <li>
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link to="/new" className="link">New</Link>
                    </li>
                    <li>
                        <Link to="/products" className="link">Products</Link>
                    </li>
                    <li></li>
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
