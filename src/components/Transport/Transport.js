import React from 'react';
import { Link } from 'react-router-dom';
import './Transport.css';

const Transport = (props) => {
    const {imageUrl, title} = props.transport;
    return (
        <div className="col-md-2 vehicle-container">
           
            <Link to={`/transport/${title}`}>
                <div className="img-container">
                    <img src={imageUrl} alt=""/>
                </div>
                <div className="text-container">{title}</div>
            </Link>
           
        </div>
                    
    );
};

export default Transport;