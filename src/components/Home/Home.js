import React, { useState } from 'react';
import './Home.css';
import bus from '../../images/bus-1.png';
import bike from '../../images/bike-1.jpg';
import train from '../../images/train-2.jpg';
import car from '../../images/car-3.jpg';
import Header from '../Header/Header';
import transportsData from '../../transportsData/transportsData.json';
import Transport from '../Transport/Transport';

const Home = () => {
    const [transports, setTransports] = useState(transportsData);
    console.log(transports);
    return (
        <div className="home">
            <Header></Header>
           <div className="container" style={{marginTop: '25%'}}>
            <div className="row justify-content-center">
                   {
                       transports.map( transport => <Transport transport={transport}></Transport>)
                   }
             </div>
           </div>
        </div>
    );
};

export default Home;