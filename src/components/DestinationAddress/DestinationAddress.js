import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './DestinationAddress.css';
import {UserContext} from '../../App'
import Header from '../Header/Header';

const DestinationAddress = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { vehicle } = useParams();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <div className="container">
            <Header></Header>
            <div className="row container ml-5 mt-5">
                <div className="col-md-4 addressbox">
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
                </div>
                <div className="col-md-6" style={{border: '1px solid red'}}>xxxxx</div>
            </div>

            <div>
                
            </div>
        </div>
    );
};

export default DestinationAddress;