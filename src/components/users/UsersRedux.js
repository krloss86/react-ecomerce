import { useDispatch, useSelector } from "react-redux";

export default function UsersRedux () {

    const usersStore = useSelector(
        (state) => state.users
    );

    debugger;
    const dispatch = useDispatch();

    const add = () => {       
        //dispatch(sumar);
    }

    return (
        <>
            <ul>
                { 
                    usersStore.users.map((user,index) => {
                        return <li key={index}>
                            {user.id}
                        </li>
                    })
                }
            </ul>
            
            <button>
                +
            </button>
        </>
    );
}