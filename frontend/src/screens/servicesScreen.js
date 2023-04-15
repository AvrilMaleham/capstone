import "./servicesScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Components
import Service from "../components/service";
import { BannerButton } from "../components/buttons";

//Actions
import { getServices as listServices } from "../redux/actions/serviceActions";

const ServicesScreen = () => {
  const dispatch = useDispatch();

  const getServices = useSelector((state) => state.getServices);
  const { services, loading, error } = getServices;

  useEffect(() => {
    dispatch(listServices());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="servicesScreen">

      <div className="servicesBanner">
        <h1 className="servicesScreen_title">SERVICES</h1>
        <div className="buttonLayout">
<BannerButton name="Products" nav="/products" ></BannerButton>
<BannerButton name="Contact" nav="/contact" ></BannerButton>
        </div>

      </div>
      <p className="servicespara">We do not believe in a one-size-fits-all service. Our training, coaching and consulting packages are based on a framework that is then tailored to each individual client’s situation, needs, and goals. We know there are many ways to reach an objective, and it is important that we align our expertise with your culture, brand, goals, and services.</p>
      <div className="servicesScreen_products">
     
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : Array.isArray(services) ?  (
          services.map((service) => (
           
            <Service
              key={service._id}
              serviceId={service._id}
              name={service.name}
              paraone={service.paraone}
              imageUrl={service.imageUrl}
            />
          ))
        ) : null }
      </div>
     
    </div>
  );
};

export default ServicesScreen;