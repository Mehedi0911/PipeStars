import React from 'react';
import { useHistory } from 'react-router';
import './ServiceCard.css'


const ServiceCard = ({service}) => {
    const history = useHistory();
    const {_id, title, price, imgURL, description} = service;
    return (
        <div className="col-md-3 service-card">
            <div><img className="image-fluid" src={imgURL} alt=""/></div>
            <h6>{title}</h6>
            <p className="text-secondary">{description}</p>
            <h6 className="brand-text-primary">Price: {price}</h6>
            <button onClick={() => history.push(`/controls/user/${_id}`)} className="brand-btn-primary">Book Now</button>
        </div>
    );
};

export default ServiceCard;