import React from 'react'
import DatosPersonales from './DatosPersonales';
import Direcciones from './Direcciones';

function ProfileData() {
   
    return (
        <>
            <DatosPersonales showProfile={true}/>            
            <Direcciones/>
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
        </>
    )
}

export default ProfileData