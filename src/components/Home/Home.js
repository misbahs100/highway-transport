import React, { useState } from 'react';
import './Home.css';
import Header from '../Header/Header';
import transportsData from '../../transportsData/transportsData.json';
import Transport from '../Transport/Transport';

const Home = () => {
    const [transports] = useState(transportsData);
    return (
        <div className="home">
            <Header></Header>
           <div className="container" style={{marginTop: '25%'}}>
            <div className="row justify-content-center card-container">
                   {
                       transports.map( transport => <Transport transport={transport} key={transport.id}></Transport>)
                   }
             </div>
           </div>
        </div>
    );
};

export default Home;