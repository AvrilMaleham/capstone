import "./cartScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//Components
import CartItem from "../components/cartItem";

//Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

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

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };


  const gst = () => {
    return getCartSubTotal() / 100 * 15;
  }

  const total = () => {
    return getCartSubTotal() + gst();
  }

  return (
    <div className="cartScreen">
      <div className="cartScreen_left">
       
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to="/">Go Back</Link>
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
        <div className="cartScreen_info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>${getCartSubTotal().toFixed(2)}</p>
          <p>GST</p>
          <p>${gst().toFixed(2)}</p>
          <p>Total</p>
          <p>${total().toFixed(2)}</p>
        </div>
        <div>
          <button>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
