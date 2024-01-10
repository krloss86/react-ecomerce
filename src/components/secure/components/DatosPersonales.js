import React/*, { useState }*/ from 'react'
import { useSelector } from 'react-redux'
/*
import { addDatosPersonales, resetDatosPersonales } from '../../../redux/states/checkout';
import { useDispatch } from 'react-redux';
*/

function DatosPersonales(props) {
    const userLogged = useSelector(store => store.login);

    /*
    const dispach = useDispatch();
    
    const updateDatosPersonales = (e) => {
        e.preventDefault();
        if(e.target.value) {
            const newUser = {
                ...userLogged.user,
                [e.target.name]: e.target.value
            };

            dispach(addDatosPersonales(newUser));
        }
    }
    */
    return (
        <>
            <h3 className='text-primary'>Datos Personales</h3>
            { props.showProfile && 
                <img src={userLogged.user.avatar} alt={'user image login'}/>
            }            
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input className="form-control input" 
                            type="text" 
                            name='firstName'
                            value={userLogged.user.firstName}
                            readOnly
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Apellido</label>
                        <input className="form-control"
                            type="text" 
                            value={userLogged.user.lastName}  
                            name='lastName'
                            readOnly
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Email</label>
                        <input className="form-control" 
                            type="text" 
                            value={userLogged.user.email}
                            name='email'
                            readOnly
                            />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DatosPersonales;