import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <div>
            
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <Link to="/home" class="navbar-brand header-text"><p>Highway Transport</p></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/home"  className="nav-link active mr-4 header-text"><p>Home</p></Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/blog" className="nav-link mr-4 header-text"><p>Blog</p></Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/contact"  className="nav-link mr-4 header-text"><p>Contact</p></Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/login"  className="nav-link active mr-4 ml-2 header-text">{loggedInUser.displayName ? <p>{loggedInUser.displayName}</p>  : <p>Login</p>}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;