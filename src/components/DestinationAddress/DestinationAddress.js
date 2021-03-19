import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const DestinationAddress = () => {
    const { vehicle } = useParams();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <div>
            <h1>This is destination address by {vehicle}.</h1>
            <div className="row container ml-5">
                <div className="col-md-4 mr-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" ref={register({ required: true })} />
                        {errors.name && <span>Name is required</span>}

                        <input name="email" ref={register({ required: true })} />
                        {errors.email && <span>Email is required</span>}

                        <input name="source" ref={register({ required: true })} />
                        {errors.source && <span>Source is required</span>}

                        <input name="destination" ref={register({ required: true })} />
                        {errors.destination && <span>Destination is required</span>}

                        <input type="submit" />
                    </form>
                </div>
                <div className="col-md-6">xxxxx</div>
            </div>
        </div>
    );
};

export default DestinationAddress;