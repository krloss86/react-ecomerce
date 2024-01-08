import React from 'react'
import { useSelector } from 'react-redux'

function ProfileData() {
    const userLogged = useSelector(store => store.login);
    return (
        <div>
            <img src={userLogged.user.avatar}/>
            <h3 className='text-primary'>Personal info</h3>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="name">First Name</label>
                        <input className="form-control input" 
                            type="text" 
                            value={userLogged.user.fistName} readOnly/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Last Name</label>
                        <input className="form-control"
                            type="text" 
                            value={userLogged.user.lastName}  readOnly
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Email</label>
                        <input className="form-control" 
                            type="text" 
                            value={userLogged.user.email}  readOnly/>
                    </div>
                </div>
            </div>
            <h3 className='text-primary'>Address Info</h3>
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
            {/* 
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label className="col-md-3 control-label"></label>
                        <div className="col-md-12 text-right">
                            <button className="btn btn-primary" type="submit">
                                Update profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            */}
        </div>
    )
}

export default ProfileData