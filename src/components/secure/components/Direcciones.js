import React from 'react'

function Direcciones() {
    return (
        <>
            <h3 className='text-primary'>Dirección</h3>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="name">Pais</label>
                        <select className="form-select">
                            <option >ARGENTINA</option>
                            <option >URUGUAY</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Provincia</label>
                        <select className="form-select">
                            <option>MISIONES</option>
                            <option>BUENOS AIRES</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Direccion</label>
                        <input className="form-control" type="text" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Direcciones;