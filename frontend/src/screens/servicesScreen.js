import "./servicesScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Components
import Service from "../components/service";

//Actions
import { getServices as listServices } from "../redux/actions/serviceActions";

const ServicesScreen = () => {
  const dispatch = useDispatch();

  const getServices = useSelector((state) => state.getServices);
  const { services, loading, error } = getServices;

  useEffect(() => {
    dispatch(listServices());
  }, [dispatch]);

  return (
    <div className="servicesScreen">
      <h2 className="servicesScreen_title">Our Services</h2>

      <div className="servicesScreen_products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          services.map((service) => (
            <Service
              key={service._id}
              serviceId={service._id}
              name={service.name}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ServicesScreen;