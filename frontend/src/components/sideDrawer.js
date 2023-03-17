import './sideDrawer.css'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const SideDrawer = ({show, click}) => {
    const sideDrawerClass = ["sideDrawer"];

    if(show) {
        sideDrawerClass.push("show");
    }

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
  
    const getCartCount = () => {
      return cartItems.reduce((qty, item) => qty + Number(item.qty), 0 );
    };

    return <div className={sideDrawerClass.join(" ")}>
        <ul className="sideDrawer_links" onClick={click}>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
          <span>Contact</span>
        </li>
        <li>
        <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">
            <span>
              Cart
              <span className="sideDrawer_cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
             <span>
              <br></br>
             </span>
        </li>
        <li>
            <img className="sidedrawer_logo" src={require("../assets/edify.png")} alt="logo" />
        </li>
        </ul>
    </div>
}

export default SideDrawer;