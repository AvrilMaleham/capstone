import "./cartScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import CartItem from "../components/cartItem";
import MyPayPal from "../components/payPalButton";
import { OtherButton } from "../components/buttons";

import {
  addToCart,
  removeFromCart,
  resetCart,
} from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const resetHandler = () => {
    dispatch(resetCart());
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  const gst = () => {
    return (getCartSubTotal() / 100) * 15;
  };

  const total = () => {
    return getCartSubTotal() + gst();
  };

  let info = cartItems.map((a) => a.name);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="break"> </div>

      <div className="cartScreen">
        <div className="cartScreen_left">
          {cartItems.length === 0 ? (
            <div>
              <div className="empty">Your cart is currently empty.</div>
              <OtherButton name="GO BACK" nav="/products"></OtherButton>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeHandler}
              />
            ))
          )}
        </div>

        <div className="cartScreen_right">
          {cartItems.length === 0 ? (
            <div className="cartScreen_info">
              <p className="sub">Subtotal ({getCartCount()}) items</p>
              <p>${getCartSubTotal().toFixed(2)}</p>
              <p className="sub">GST</p>
              <p>${gst().toFixed(2)}</p>
              <p className="sub">Total</p>
              <p>${total().toFixed(2)}</p>
            </div>
          ) : (
            <div className="cartScreen_info">
              <Link to="/products" className="cntshop">
                Continue Shopping &#x2192;{" "}
              </Link>
              <p className="sub">Subtotal ({getCartCount()}) items</p>
              <p className="deets">${getCartSubTotal().toFixed(2)}</p>
              <p className="sub">GST</p>
              <p className="deets">${gst().toFixed(2)}</p>
              <p className="sub">Total</p>
              <p className="deets">${total().toFixed(2)}</p>
            </div>
          )}
          <MyPayPal total={total()} reset={resetHandler} input={info} />
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
