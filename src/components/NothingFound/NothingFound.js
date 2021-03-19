import React from 'react';
import './NothingFound.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

const NothingFound = () => {
    return (
        <div className="nothing-found">
            <h4>It seems like there aren't many great results for your search</h4>
            <h1>4<FontAwesomeIcon icon={faFutbol} />4 Not Found !</h1>
        </div>
    );
};

export default NothingFound;