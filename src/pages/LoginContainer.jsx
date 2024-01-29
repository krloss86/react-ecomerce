import { useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import jwt_decode from 'jwt-decode';
import { login } from "../redux/states/login";
import { fromExternalToLocalLogin } from "../components/login/infrastructure/login-adapter";
import axios from "axios";
import { breadCrumSlice } from './../redux/states/bredcrum';

const LoginContainer = () => {
    const [googleAuth, setGoogleAuth] = useState(undefined);
    const userData = useSelector(store => store.userData);
    const dispatcher = useDispatch();
    const navigate = useNavigate();
    // console.log(userData)

    const lastPath = useSelector(store => store.breadCrumSlice);

    const loginGoogle = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log(tokenResponse);
            const userInfo = await axios.get(
                'https://www.googleapis.com/oauth2/v3/userinfo',
                { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } },
            );
            
            console.log(userInfo.data);
            setGoogleAuth(userInfo.data);
        },
        onError: errorResponse => console.log(errorResponse),
    });

    useEffect(() => {
        if (googleAuth) {
            const loginData = fromExternalToLocalLogin(googleAuth);
            dispatcher(login({ user: loginData }));

            navigate(lastPath.path);
        }
    }, [googleAuth]);

    return (
        <Login
            loginGoogle={loginGoogle}
        />
    );
};

export default LoginContainer;