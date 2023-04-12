import "./productScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Components
import Product from "../components/product";
import {BannerButton} from "../components/buttons";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const ProductScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="productScreen">
     
      <div className="productBanner">
        <h1 className="productScreen_title">PRODUCTS</h1>
        <div className="buttonLayout">
<BannerButton name="Services" nav="/services" ></BannerButton>
<BannerButton name="Contact" nav="/contact" ></BannerButton>
        </div>
      </div>
     


      <div className="homeScreen_products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : Array.isArray(products) ? (
          products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              price={product.price}
            // description={product.description}  
              imageUrl={product.imageUrl}
            />
          ))
        ) : null }
      </div>
    </div>
  );
};

export default ProductScreen;
