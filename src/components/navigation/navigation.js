import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './navigation.css'
import { Home, New, Products, Promo, Contact, About } from '../main/main'
import logo from "../../asset/logo.png"
import bag from "../../asset/loaded-bag.svg"
import search from "../../asset/search.svg"
import wishlist from "../../asset/wishlist.svg"


const Navigation = () => (
        <Router>
            <div>
                <div className="icon">
                    <div></div>
                    <img src={logo} alt="logo"/>
                    <img className="svg-class" src={bag} alt="logo"/>
                    <img className="svg-class" src={search} alt="logo"/>
                    <img className="svg-class" src={wishlist} alt="logo"/>
                </div>
                <ul className="nav">
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
                    <li>
                        <Link to="/promo" className="link">Promo</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="link">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about" className="link">About</Link>
                    </li>
                    <li></li>
                </ul>

                <Route exact path="/" component={Home} />
                <Route path="/new" component={New} />
                <Route path="/products" component={Products} />
                <Route path="/promo" component={Promo} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                {/* <Route path="/promo" component={Promo} /> */}
                {/* <Route path="/contact" component={Contact} /> */}
                {/* <Route path="/about" component={About} /> */}
            </div>
        </Router>
    )

export default Navigation
