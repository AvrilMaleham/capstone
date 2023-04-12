import "./product.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";

const Product = ({ imageUrl, name, price, productId }) => {
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
    dispatch(addToCart(id, qty));
    navigate("/cart");
  });

  return (
    <div className="product">
 
      <img src={process.env.PUBLIC_URL + imageUrl} />
      

      <div className="product_info">
        <p className="info_name">{name}</p>
        

        <p className="info_price">${price} + GST</p>

        <p>
          <button className="addtocart_button" type="button" onClick={addToCartHandler}>

            ADD TO CART 
          </button>
        </p>
      </div>
    </div>
  );
};

export default Product;
