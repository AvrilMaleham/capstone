import "./cartItem.css";

const CartItem = ({ item, removeHandler }) => {
  return (
    <div className="cartItem">
      <div className="cartItem_image">
        <img src={item.imageUrl} alt={item.name} />
      </div>

      <p className="cartItem_name">{item.name}</p>

      <p className="cartItem_price"> ${item.price}</p>

      <button
        className="cartItem_deleteButton"
        onClick={() => removeHandler(item.product)}
      >
        x
      </button>
    </div>
  );
};

export default CartItem;
