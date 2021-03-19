import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                    <Link to="/home" class="navbar-brand">Highway Transport</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                                <Link to="/home"  className="nav-link active">Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/blog" className="nav-link">Blog</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/contact"  className="nav-link">Contact</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/login"  className="nav-link">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;