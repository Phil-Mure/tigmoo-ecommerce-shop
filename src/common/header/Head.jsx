// import React from "react"

// const Head = () => {
//   return (
//     <>
//       <section className='head'>
//         <div className='container d_flex'>
//           <div className='left row'>
//             <i className='fa fa-phone'></i>
//             <label> +260 9666 22222</label>
//             <i className='fa fa-envelope'></i>
//             <label> info@tigmoo.com</label>
//           </div>
//           <div className='right row RText'>
//             <label>FAQ"s</label>
//             <label>Need Help?</label>
//             <span>🏳️‍⚧️</span>
//             <label>EN</label>
//             <span>🏳️‍⚧️</span>
//             <label>ZMW</label>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Head

import React, { useState, useEffect } from "react"
import axios from 'axios';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import mylogo from "../../components/assets/images/tigmoo_logo.png"
import {FaShoppingCart} from "react-icons/fa"
import { Link } from "react-router-dom";



const Head = ({ CartItem }) => {  

  return (
    <div className="header">
      
        <img
          className="header__logo"
          src={mylogo}
        />
      

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="" />
      </div>

      <div className="header__nav">
        
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        

        
          <div className="header__option">
            <span className="header__optionLineOne">Gift</span>
            <span className="header__optionLineTwo">Card</span>
          </div>
        
        

          <div className="header__option">
            <span className="header__optionLineOne">Track</span>
            <span className="header__optionLineTwo">Order</span>
          </div>

        
          <div className="">
            <Link to='/cart' className="header__optionBasket">
              <FaShoppingCart />
              <span className="cart__count">{CartItem.length === 0 ? "" : CartItem.length}</span>
              <span className="header__basketCount">Cart</span>
            </Link>
            
          </div>
        
      </div>
    </div>
  );
}

export default Head;
