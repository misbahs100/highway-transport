import React, { useState } from 'react';
import './Home.css';
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
            <div className="row justify-content-center card-container">
                   {
                       transports.map( transport => <Transport transport={transport}></Transport>)
                   }
             </div>
           </div>
        </div>
    );
};

export default Home;