import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './DestinationAddress.css';
import { UserContext } from '../../App'
import Header from '../Header/Header';
import transportsData from '../../transportsData/transportsData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
// import moment from 'moment';
import 'moment/locale/fr';
import MapContainer from '../MapContainer/MapContainer';

const DestinationAddress = () => {
    const [loggedInUser] = useContext(UserContext);   // context 
    const { displayName, email } = loggedInUser;        // destructuring
    const [transports] = useState(transportsData);    // fake data
    const { vehicle } = useParams();
    const { register, handleSubmit, errors } = useForm();
    const [isSearched, setIsSearched] = useState(false);
    const [address, setAddress] = useState({
        source: '',
        destination: ''
    })
    const handleOnBlur = (e) => {
        const newAddress = { ...address };
        newAddress[e.target.name] = e.target.value;
        console.log(e.target.value);
        setAddress(newAddress);
    }
    const onSubmit = data => {
        setIsSearched(true);
    };

    // finding the matched transport object which is selected
    const result = transports.find(({ title }) => title === vehicle);

    return (
        <div className="loginbox-container">
            <Header></Header>
            <div className="row container mt-5">
                {isSearched
                    ?
                    (<div className="col-md-4 container result-container">
                        <div className="timeline">
                            <div className="timeline-text">Source: {address.source}</div>
                            <div className="timeline-text">Destination: {address.destination}</div>
                        </div>
                        <div className="d-flex detail bg-white">
                            <div className="img-address"><img src={result.imageUrl} alt="" /></div>
                            <div><p>{result.title} <FontAwesomeIcon icon={faUserFriends} /> {result.capacity}</p></div>
                            <div><p>{result.price}</p></div>
                        </div>
                        <div className="d-flex detail bg-white">
                            <div className="img-address"><img src={result.imageUrl} alt="" /></div>
                            <div><p>{result.title} <FontAwesomeIcon icon={faUserFriends} /> {result.capacity}</p></div>
                            <div><p>{result.price}</p></div>
                        </div>
                        <div className="d-flex detail bg-white">
                            <div className="img-address"><img src={result.imageUrl} alt="" /></div>
                            <div><p>{result.title} <FontAwesomeIcon icon={faUserFriends} /> {result.capacity}</p></div>
                            <div><p>{result.price}</p></div>
                        </div>
                    </div>)
                    :
                    (<div className="col-md-4 container addressbox">
                        <h3 className="text-center mt-3">Provide your address here</h3>

                        <form className="address-form" onSubmit={handleSubmit(onSubmit)}>

                            <input name="name" defaultValue={displayName} ref={register({ required: true })} placeholder="Your name" />
                            {errors.name && <span className="error">Name is required</span>}

                            <input name="email" defaultValue={email} ref={register({ required: true })} placeholder="Your email" />
                            {errors.email && <span className="error">Email is required</span>}

                            <input name="source" onBlur={handleOnBlur} ref={register({ required: true })} placeholder="Pick from" />
                            {errors.source && <span className="error">Source is required</span>}

                            <input name="destination" onBlur={handleOnBlur} ref={register({ required: true })} placeholder="Destination" />
                            {errors.destination && <span className="error">Destination is required</span>}

                            <p className="date-p">Click below to set date.</p>
                            <Datetime className="calendar" locale="en-ca" />

                            <input type="submit" value={`Search for nearest ${vehicle}`} />
                        </form>
                    </div>)
                }



                <div className="col-md-6 mapbox">
                    <MapContainer></MapContainer>
                </div>
            </div>


        </div>
    );
};

export default DestinationAddress;