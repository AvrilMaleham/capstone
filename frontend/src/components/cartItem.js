import "./cartItem.css";
import { Link } from "react-router-dom";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartItem">
      <div className="cartItem_image">
        <img src={item.imageUrl} alt={item.name} />
      </div>

      {/* <Link to={`/product/${item.product}`} className="cartItem_name">
       
      </Link>  */}

<p className="cartItem_name">{item.name}</p>

      <p className="cartItem_price"> ${item.price}</p>

      {/* <select
        className="cartItem_select"
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select> */}

      <button className="cartItem_deleteButton" onClick={() => removeHandler(item.product)}>
        x
      </button>
    </div>
  );
};

export default CartItem;
