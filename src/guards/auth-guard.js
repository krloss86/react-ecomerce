import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export function AuthGuard (){
    const loginStore = useSelector(store => store.login);
    return loginStore.user ? <Outlet/> : <Navigate to={'/'}></Navigate>
}

export default AuthGuard;