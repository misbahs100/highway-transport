import React from 'react';
import './Home.css';
import bus from '../../images/bus-1.png';
import bike from '../../images/bike-1.jpg';
import train from '../../images/train-2.jpg';
import car from '../../images/car-3.jpg';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className="home">
            <Header></Header>
           <div className="container" style={{marginTop: '25%'}}>
            <div className="row justify-content-center">
                    <div class="col-md-3 vehicle-container">
                        <div className="img-container">
                            <img src={bus} alt=""/>
                        </div>
                        <div className="text-container">Bus</div>
                    </div>
                    <div class="col-md-3 vehicle-container">
                        <div className="img-container">
                            <img src={bike} alt=""/>
                        </div>
                        <div className="text-container">Bike</div>
                    </div>
                    <div class="col-md-3 vehicle-container">
                        <div className="img-container">
                            <img src={train} alt=""/>
                        </div>
                        <div className="text-container">Train</div>
                    </div>
                    <div class="col-md-3 vehicle-container">
                        <div className="img-container">
                            <img src={car} alt=""/>
                        </div>
                        <div className="text-container">Car</div>
                    </div>
             </div>
           </div>
        </div>
    );
};

export default Home;