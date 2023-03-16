import { useDispatch, useSelector } from 'react-redux';

export function AuthGuard (){
 
    const loginStore = useSelector(store => store.login);
}