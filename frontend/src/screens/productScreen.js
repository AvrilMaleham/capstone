// import './productScreen.css';
// import {useState, useEffect} from 'react';
// import { useDispatch, useSelector } from 'react-redux';


// //Actions
// import { getProductDetails } from '../redux/actions/productActions';
// import { addToCart } from '../redux/actions/cartActions';
// import { useParams, useNavigate } from 'react-router-dom';

// //const ProductScreen = ({match, history}) => {
//     const ProductScreen = () => {

// const { id } = useParams(); 
// const navigate = useNavigate(); 

// const [qty, setQty] = useState(1);
// const dispatch = useDispatch();

// const productDetails = useSelector((state) => state.getProductDetails);
// const {loading, error, product} = productDetails;

// useEffect(() => {
    
//    if (product && id){
//    dispatch(getProductDetails(id));
// }
// }, []);




//     return(
//         <div className='productScreen' >
//             {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
//                 <>
//                  <div className="productScreen_left" >
                
//                 <div className="left_image" >
//                     <img src={product.imageUrl} alt={product.name} ></img>
//                 </div>
                
//                 <div className="left_info" >
//                     <p className="left_name">{product.name}</p>
//                     <p>${product.price}</p>
//                     <p>{product.description} </p>
//                 </div>

//             </div>

//             <div className="productScreen_right" >
                
//                 <div className="right_info" >
//                     <p>Price: <span>${product.price} </span></p>
//                     <p>Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"} </span></p> 
//                     <p>Qty 
//                         <select value={qty} onChange={(e) => setQty(e.target.value)} >
//                            {[...Array(product.countInStock).keys()].map((x) => (
//                             <option key={x+1} value={x+1} >{x+1}</option>
//                            ))}
//                         </select>   
//                     </p>
                    
//                 </div>

//             </div>
//                 </> 
//             )}
            
           
//         </div>
//     );
// };

// export default ProductScreen;