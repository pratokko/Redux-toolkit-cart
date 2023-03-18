import React from "react";

import  CartIcon  from "../icons/CartIcon";

import { useSelector } from "react-redux";

function NavBar() {
  const {amount} = useSelector((store) => store.cart)
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
