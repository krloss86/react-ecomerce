import ProfileData from "../components/ProfileData";
import ProfileNavbar from "../components/ProfileNavbar";

function Profile() {
    return (
        <>
            <div className="row mt-5">
                <div className="col-sm-12 col-lg-3">
                    <ProfileNavbar/>
                </div>
                <div className="col-sm-12 col-lg-9">
                    <ProfileData/>
                </div>
            </div>
        </>
    )
}

export default Profile;