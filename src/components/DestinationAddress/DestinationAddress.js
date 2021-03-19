import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './DestinationAddress.css';
import {UserContext} from '../../App'
import Header from '../Header/Header';
import Map from '../Map/Map';
import transportsData from '../../transportsData/transportsData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons'

const DestinationAddress = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log("context: ", loggedInUser);
    const [transports, setTransports] = useState(transportsData);
    console.log("keu: ",transports);
    const { vehicle } = useParams();
    const { register, handleSubmit, watch, errors } = useForm();
    const [isSearched, setIsSearched] = useState(false);
    const onSubmit = data => {
        console.log(data);
        setIsSearched(true);
    };
   const result = transports.find(({title}) => title === vehicle);
   console.log(result);

    return (
        <div className="container">
            <Header></Header>
            <div className="row container mt-5">
                {isSearched
                  ?  ( <div className="col-md-4 container" style={{border:'1px solid black', padding:'10px'}}>
                  <div className="timeline"></div>
                  <div className="d-flex detail">
                      <div className="img-address"><img src={result.imageUrl} alt=""/></div>
                      <div><p>{result.title} <FontAwesomeIcon icon={faUserFriends} /> {result.capacity}</p></div>
                      <div><p>{result.price}</p></div>
                  </div>
                  <div className="d-flex detail">
                      <div className="img-address"><img src={result.imageUrl} alt=""/></div>
                      <div><p>{result.title} <FontAwesomeIcon icon={faUserFriends} /> {result.capacity}</p></div>
                      <div><p>{result.price}</p></div>
                  </div>
                  <div className="d-flex detail">
                      <div className="img-address"><img src={result.imageUrl} alt=""/></div>
                      <div><p>{result.title} <FontAwesomeIcon icon={faUserFriends} /> {result.capacity}</p></div>
                      <div><p>{result.price}</p></div>
                  </div>
              </div>)
                : ( <div className="col-md-4 container addressbox">
                <h1>Address</h1>
                <form className="address-form" onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" defaultValue={loggedInUser.displayName} ref={register({ required: true })} placeholder="Your name"/>
                    {errors.name && <span className="error">Name is required</span>}

                    <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your email" />
                    {errors.email && <span className="error">Email is required</span>}

                    <input name="source" ref={register({ required: true })} placeholder="Pick from" />
                    {errors.source && <span className="error">Source is required</span>}

                    <input name="destination" ref={register({ required: true })} placeholder="Destination" />
                    {errors.destination && <span className="error">Destination is required</span>}

                    <input type="submit" value="Search"/>
                </form>
              </div>)
                }


               
                <div className="col-md-6" style={{border: '1px solid red'}}>
                    <Map></Map>
                </div>
            </div>

          
        </div>
    );
};

export default DestinationAddress;