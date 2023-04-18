import jwt_decode from 'jwt-decode';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../redux/states/login';
import { useState } from 'react';

const LoginComponent = () => {
    
    const [count, setCount] = useState(-1);

    const dispatcher = useDispatch();

    const loginStore = useSelector(store => store.login);

    const hanldeLogout = () => {
        dispatcher(logout());
        setCount(count * -1);
    }

    useEffect(() => {
        /* global google */
        try {
            google.accounts.id.initialize({
                client_id: '492139773464-u7phka2ltscq09ahdrt1egij4nl8fddr.apps.googleusercontent.com',
                callback: (response) => {
                    const userObject = jwt_decode(response.credential);
                    dispatcher(login({user: userObject}))
                }
            });
            google.accounts.id.renderButton(
                document.getElementById('signInDiv'),
                { theme: 'aoutline', size: 'large' }
            );
        }catch(error) {
            console.log('google load fail, traying')
            setCount(prev=>prev+1);
        }
    }, [count, loginStore.user,dispatcher]);

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