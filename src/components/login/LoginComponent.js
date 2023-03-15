import jwt_decode from 'jwt-decode';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../redux2/states/login';

const LoginComponent = () => {
    
    const dispatcher = useDispatch();

    const loginStore = useSelector(store => store.login);

    const hanldeLogout = () => {
        dispatcher(logout());
    }

    const dispath = useDispatch();

    const handleCallbackResponse = (response) => {
        const userObject = jwt_decode(response.credential);
        dispath(login({user: userObject}))
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '492139773464-u7phka2ltscq09ahdrt1egij4nl8fddr.apps.googleusercontent.com',
            callback: handleCallbackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            { theme: 'aoutline', size: 'large' }
        );
    }, [loginStore]);

    useEffect(() => {
    }, [loginStore.user])

    return (
        <>
        { !loginStore.user && 
            <div id="signInDiv"/>
        }
        { loginStore.user && 
            <>
                <img src={loginStore?.user?.picture} alt=""/>
                <h3>{loginStore?.user?.name}</h3>
                <button onClick={hanldeLogout}>
                    Logout
                </button>
            </>
        }
        </>
    )
}

export default LoginComponent;