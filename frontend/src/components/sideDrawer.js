import './sideDrawer.css'
import {Link} from 'react-router-dom';

const SideDrawer = ({show, click}) => {
    const sideDrawerClass = ["sideDrawer"];

    if(show) {
        sideDrawerClass.push("show");
    }

    return <div className={sideDrawerClass.join(" ")}>
        <ul className="sideDrawer_links" onClick={click}>
        <li>
            <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
                <span>
                    Cart <span className="sideDrawer_cartbadge">0</span>
                </span>
            </Link>
        </li>
        <li>
            <Link to="/">Shop</Link>
        </li>
        </ul>
    </div>
}

export default SideDrawer;