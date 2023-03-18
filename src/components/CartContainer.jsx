import cartItems from "../CartItems";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./CartItem";
import { openModal } from "../features/modal/modalSlice";
import { useState } from "react";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart"> No Added Items In cart</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
        {cartItems.map((item) => {
          return <Cart key={item.id} {...item} />;
        })}

        <footer>
          <hr />

          <div className="cart-total">
            <h4>
              total <span>${total.toFixed(2)}</span>
            </h4>
            <button
              className="btn clear-btn"
              onClick={() => dispatch(openModal())}
            >
              {" "}
              Clear Cart
            </button>
          </div>
        </footer>
      </header>
    </section>
  );
};

export default CartContainer;
