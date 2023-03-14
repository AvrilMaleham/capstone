import "./footer.css";
import { Link } from "react-router-dom";

const Footer = ({ click }) => {
  return (
    <footer className="footer">
      <ul className="first">
        <li>
          <span>Home</span>
        </li>
        <li>
        <Link to="/services" className="nav_link">Services</Link>
        </li>
        <li>
          <Link to="/" className="nav_link">
            Products
          </Link>
        </li>
      </ul>

      <ul className="second">
        <li>
          <span>Contact</span>
        </li>
        <li>
          <span>Phone: 021 888 462</span>
        </li>
        <li>
          <span>Email: info@edifypmconsulting.com</span>
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
  );
};

export default Footer;
