import './individualServiceScreen.css';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';


//Actions
import { getServiceDetails } from '../redux/actions/serviceActions';
import { addToCart } from '../redux/actions/cartActions';
import { useParams, useNavigate } from 'react-router-dom';

//const ProductScreen = ({match, history}) => {
    const IndividualServiceScreen = () => {

const { id } = useParams(); 
const navigate = useNavigate(); 

const [qty, setQty] = useState(1);
const dispatch = useDispatch();

const serviceDetails = useSelector((state) => state.getServiceDetails);
const {loading, error, service} = serviceDetails;

useEffect(() => {
    
   if (service && id){
   dispatch(getServiceDetails(id));
}
}, []);


const addToCartHandler = {} = () => {
    dispatch(addToCart(service._id, qty));
    //?
    navigate('/cart');
}

    return(
        <div className='individualServiceScreen' >
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
                <>
                 <div className="individualServiceScreen_left" >
                
                <div className="left_image" >
                    <img src={service.imageUrl} alt={service.name} ></img> 
                </div>
                
                <div className="left_info" >
                    <p className="left_name">{service.name}</p>
                    <p>{service.description} </p>
                </div>

            </div>

           
                </> 
            )}
            
           
        </div>
    );
};

export default IndividualServiceScreen;