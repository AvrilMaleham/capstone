import "./individualServiceScreen.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PopupButton } from "react-calendly";

//Actions
import { getServiceDetails } from "../redux/actions/serviceActions";
import { addToCart } from "../redux/actions/cartActions";
import { useParams, useNavigate } from "react-router-dom";

const IndividualServiceScreen = () => {

  const [book, setBook] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const serviceDetails = useSelector((state) => state.getServiceDetails);
  const { loading, error, service } = serviceDetails;

  useEffect(() => {
    if (service && id) {
      dispatch(getServiceDetails(id));
    }
  }, []);


     const bookButtonHandler = () => {
      service.name === "Inspections" ? setBook(true) : setBook(false);
     }

  return (
    <div className="individualServiceScreen" onLoad={bookButtonHandler}>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="individualServiceScreen_left">
            <div className="left_image">
              <img src={service.imageUrl} alt={service.name}></img>
            </div>

            <div className="left_info">
              <p className="left_name">{service.name}</p>
              <p>{service.description} </p>
            </div>

            <div>

      {book ? (
       <PopupButton className="bookbutton"
       url="https://calendly.com/avrilmaleham"
       /*
        * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
        * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
        */
       rootElement={document.getElementById("root")}
       text="Book now"
     />
      ) : null}
           
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default IndividualServiceScreen;
