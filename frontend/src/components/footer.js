import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div >
      <div className="break"> </div>
    <footer className="footer">

 <ul className="first">
        <li>
        <Link to="/" className="nav_link">
            Home
          </Link>
        </li>
        <li>
        <Link to="/services" className="nav_link">Services</Link>
        </li>
        <li>
          <Link to="/products" className="nav_link">
            Products
          </Link>
        </li>
      </ul>

      <ul className="second">
        <li>
        <Link to="/contact" className="nav_link">
            Contact
          </Link>
        </li>
        <li>
          <span >Phone: <a className="number" href="tel:0277788523">021 888 462</a></span>
        </li>
        <li>
          <span>Email: <a className="number" href="mailto:avrilm.1@hotmail.co.uk" target="_top">info@edifypmconsulting.com</a></span>
        </li>
      </ul>

      <ul className="third">
        <li>
            <span> &copy; Edify 2023</span>
        </li>
        <li>
            <span>Website creation by Avril Maleham </span>
        </li>
      </ul>

    </footer>
    </div>
  );
};

export default Footer;
