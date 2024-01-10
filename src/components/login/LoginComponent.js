import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/states/login';
import { useState } from 'react';
import { fromExternalToLocalLogin } from './infrastructure/login-adapter';
import jwt_decode from 'jwt-decode';

const LoginComponent = () => {
    
    const dispatcher = useDispatch();

    const loginStore = useSelector(store => store.login);

    const [googleResponse,setGoogleResponse] = useState(undefined);
    
    useEffect(() => {
        /* global google */
        try {
            if(google) {
                google.accounts.id.initialize({
                    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                    callback: (response) => {
                        const userObject = jwt_decode(response.credential);
                        setGoogleResponse(prev => userObject)
                    }
                });  
                google.accounts.id.renderButton(
                    document.getElementById('signInDiv'),
                    { theme: 'outline', size: 'large' }
                ); 
                google.accounts.id.prompt(); // also display the One Tap dialog         
            }
        } catch(error) {
            setGoogleResponse(prev => undefined)
        }
    }, []);

    useEffect(() => {
        if(googleResponse) {
            const loginData = fromExternalToLocalLogin(googleResponse);
            dispatcher(login({user: loginData}));
        }
    },[googleResponse]);

    return (
        <div id="signInDiv"/>
    )
}

export default LoginComponent;