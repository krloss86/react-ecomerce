import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateBreadCrum } from '../redux/states/bredcrum';

export function AuthGuard (){
    
    const dispatcher = useDispatch();
    const location = useLocation()

    const currentPath = () => {
        return location.pathname;
    }
    useEffect(()=> {
       dispatcher(updateBreadCrum({path: currentPath()}));
    },[location]);

    const loginStore = useSelector(store => store.login);
    return loginStore.user ? <Outlet/> : <Navigate to={'/login'}></Navigate>
}

export default AuthGuard;