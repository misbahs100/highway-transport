import React, { useContext, useState } from 'react';
import { createUserWithEmailAndPassword, handleSignInWithGithub, handleSignInWithGoogle, signInWithEmailAndPassword } from './loginManager';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
import { UserContext } from '../../App';
import googlePic from '../../images/google-2.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import Header from '../Header/Header';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        photo: ''
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleSignInWithGoogle()
            .then(res => {
                handleResponse(res);
                console.log(res)
            })
            .catch(error => {
                console.log(error);

            })
    }

    const ghSignIn = () => {
        handleSignInWithGithub()
            .then(res => {
                handleResponse(res);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleOnBlur = (e) => {
        let isFieldValid = true;
        let pass;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordLength = e.target.value.length > 6;
            const isPasswordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordLength && isPasswordHasNumber;
            pass = e.target.value;
        }
        if(e.target.name === 'confirmPassword'){
           
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            newUserInfo.error = "";
            setUser(newUserInfo);
            console.log(isFieldValid)
        }
        else {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            
            setUser(newUserInfo);
        }
        

    }

    const handleOnSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res);
                })
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    console.log("jsiodf", res);
                    handleResponse(res);
                })
                .catch(error => {
                    console.log("ooo: ",error);
                })
        }
        e.preventDefault();
    }

    const handleResponse = (res) => {
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
        // if(user.success){
        //     history.replace(from);
        // }
    }

console.log("sdfjsk", user.error, user.success)

    return (
        <div className="loginbox-container">
            <Header></Header>
            <div className="loginbox">
                {newUser
                    ? <h1>Create a new account</h1>
                    : <h1>Login Here</h1>
                }
                <form onSubmit={handleOnSubmit}>
                    {newUser && <input type="text" name="name" onBlur={handleOnBlur} placeholder="Your name" />}

                    
                    <input type="email" name="email" onBlur={handleOnBlur} placeholder="Your email" />
                    <br />
                    
                    <input type="password" name="password" onBlur={handleOnBlur} placeholder="Your password" />
                    <br />
                    {/* {user.error === "something not valid" && <small style={{color: 'red'}}>Password should minimum 6 digits long and contain 1 number</small>} */}
                    {!user.success && <p>{user.error}</p>}
                    <input type="password" name="confirmPassword" onBlur={handleOnBlur} placeholder="Confirm your password" />
                    <br />
                    <input type="submit" value={newUser ? "Sign up" : "Sign in"} />
                    <a href="#">Forgot Password?</a>
                    <br />
                    {newUser
                        ? <a href="#" onClick={() => setNewUser(!newUser)}>Already have an account? Log in.</a>
                        : <a href="#" onClick={() => setNewUser(!newUser)}>Don't have an account? Create one.</a>
                    }
                    <br />
                    <p>--- or ---</p>
                    <br />
                </form>
                    
                {/* {user.success ? <p>User logged in successfully.</p> : <p>not valid</p>} */}
                <div>
                    {/* <FacebookIcon titleAccess="Sign in with Facebook" onClick='' className="signin-btn"></FacebookIcon> */}
                    <button title="Sign in with Google" onClick={googleSignIn} className="signin-btn"><img src={googlePic} alt="" /></button>
                    {/* <TwitterIcon titleAccess="Sign in with Twitter" className="signin-btn"></TwitterIcon> */}
                    <GitHubIcon titleAccess="Sign in with Github" onClick={ghSignIn} className="signin-btn"></GitHubIcon>
                </div>
            </div>
        </div>
    );
}

export default Login;