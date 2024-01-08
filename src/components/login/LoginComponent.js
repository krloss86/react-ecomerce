import jwt_decode from 'jwt-decode';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../redux/states/login';
import { useState } from 'react';
import { fromExternalToLocalLogin } from './infrastructure/login-adapter';

const LoginComponent = () => {
    
    const [count, setCount] = useState(-1);

    const dispatcher = useDispatch();

    const loginStore = useSelector(store => store.login);

    const [googleResponse,setGoogleResponse] = useState(undefined);

    const hanldeLogout = () => {
        dispatcher(logout());
        setCount(count * -1);
    }

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
            }
        } catch(error) {
            setGoogleResponse(prev => undefined)
            setCount(prev => prev + 1);
        }
    }, [count, loginStore.user]);

    useEffect(() => {
        if(googleResponse) {
            const loginData = fromExternalToLocalLogin(googleResponse);
            dispatcher(login({user: loginData}));
        }
    },[googleResponse]);

    return (
        <div>
        { !loginStore.user && 
            <div id="signInDiv"/>
        }
        { loginStore.user && 
            <>
                {/*
                <img src={loginStore?.user?.picture} alt=""/>
                <h5>{loginStore?.user?.name}</h5>
                */}
                <button onClick={hanldeLogout} className="btn btn-danger">
                    Logout
                </button>
            </>
        }
        </div>
    )
}

export default LoginComponent;