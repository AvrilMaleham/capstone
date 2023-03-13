import './service.css'
import {Link} from 'react-router-dom';

const Service = ({imageUrl, name, price, description, serviceId}) => {
    return (
    <div className='service'>
        <img src={imageUrl} alt={name} />

        <div className="service_info" >
            <p className="info_name" >{name}</p>
            <p className="info_description" >
            {description.substring(0, 100)}...
            </p>

            

            <Link to={`/service/${serviceId}`} className='info_button' >FIND OUT MORE</Link>
        </div>
    </div>
    )
}

export default Service;