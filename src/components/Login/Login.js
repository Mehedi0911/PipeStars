import React, { useContext, useState } from 'react';
import googleLogo from '../../Images/Icons/google.svg'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './fire.config'
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}
const Login = () => {
   
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((res) => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    success: true
                }
                
                setLoggedInUser(res.user);
                history.replace(from);
                console.log(res.user);

                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }


    return (
        <div className="text-center pt-5">
             <h3 className="brand-text-primary m-5">PIPE<span className="brand-span-secondary">STARs</span></h3>
             <h5 className="mb-3">Please Login to Continue</h5>
            <div className="mb-3">
                    <button className="brand-btn-secondary" onClick={handleGoogleSignIn}><img style={{height:'20px',marginRight:'1rem'}} src={googleLogo} alt=""/> Sign In With Google</button>
                    {/* <button>Sign In With Facebook</button> */}
            </div>
            <h6>New Here? <a className="brand-text-primary" href="#">Create an Account</a></h6>
        </div>
    );
};

export default Login;