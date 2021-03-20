import React from 'react';
import Header from '../Header/Header';

const Blog = () => {
    return (
        <div className="loginbox-container">
            <Header></Header>
            <div className="mt-5 text-center" style={{color: 'white'}}>
                <h1>This is blog. It is under private route.</h1>
                <p>You're seeing the blog, that means, you are logged in.</p>
            </div>
        </div>
    );
};

export default Blog;