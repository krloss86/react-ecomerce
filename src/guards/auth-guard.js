import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export function AuthGuard (){
 
    const loginStore = useSelector(store => store.login);
    return loginStore.user ? <Outlet/> : <Navigate replace to={'/'}></Navigate>
}

export default AuthGuard;