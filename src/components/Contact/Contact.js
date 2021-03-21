import React from 'react';
import Header from '../Header/Header';

const Contact = () => {
    return (
        <div className="loginbox-container">
            <Header></Header>
            <div className="mt-5 text-center" style={{color: 'white'}}>
                <h1>This is contact. It is under private route.</h1>
                <p>You're seeing the contact room, that means, you are logged in.</p>
            </div>
        </div>
    );
};

export default Contact;