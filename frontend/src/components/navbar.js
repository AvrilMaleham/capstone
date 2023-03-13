import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({click}) => {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0 );
  };

  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={require("../assets/logo.png")} alt="logo"/>
      </div>

      <ul className="navbar_links">
        <li>
          <span>Home</span>
        </li>
        <li>
          <span>Contact</span>
        </li>
        <li>
        <Link to="/services" className="nav_link">Services</Link>
        </li>
        <li>
          <Link to="/" className="nav_link">Products</Link>
        </li>
        <li>
          <Link to="/cart" className="nav_link">
            <span>
              Cart
              <span className="cartlogo_badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
      </ul>

      <div className="hamburger_menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
