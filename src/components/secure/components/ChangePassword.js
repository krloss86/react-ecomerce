import React from 'react'

function ChangePassword() {
    return (
        <form noValidate="">
            <div className="form-group">
                <label htmlFor="name">Current password</label>
                <input className="form-control input" type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="name">New password</label>
                <input className="form-control input" type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="name">Confirm New password</label>
                <input className="form-control input" type="text" />
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary mt-1 w-100"
                    type="submit">
                    Change passowrd
                </button>
            </div>
        </form>
    )
}

export default ChangePassword