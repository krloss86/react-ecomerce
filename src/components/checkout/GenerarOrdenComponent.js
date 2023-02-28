import React from 'react'
/*import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';*/

function GenerarOrdenComponent() {
    //const navigate = useNavigate();

	//const dispach = useDispatch();

    const isDisabled = () => {
		// return  pais ==='' || direccion === '' || nombre ==='' || apellido ==='' || email ==='';
		return false;
	}
    return (<>
        <button className="w-100 btn btn-primary btn-lg"
            type="submit"
            disabled={isDisabled()}>
            Generar Orden
        </button>
    </>
    )
}

export default GenerarOrdenComponent