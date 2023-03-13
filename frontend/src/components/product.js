import "./product.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import { useParams, useNavigate } from "react-router-dom";

const Product = ({ imageUrl, name, price, description, productId }) => {
  const id = productId;
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && id) {
      dispatch(getProductDetails(id));
    }
  }, []);

  const addToCartHandler = ({} = () => {
    dispatch(addToCart(product._id, qty));
    //?
    navigate("/cart");
  });

  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product_info">
        <p className="info_name">{name}</p>
        <p className="info_description">{description.substring(0, 100)}...</p>

        <p className="info_price">${price}</p>

        <p>
          <button type="button" onClick={addToCartHandler}>

            Add to cart
          </button>
        </p>
      </div>
    </div>
  );
};

export default Product;
