import ProfileData from "../components/ProfileData";
import ProfileNavbar from "../components/ProfileNavbar";

function Profile() {
    return (
        <>
            <section className="text-center mb-5">
                <div className="container">
                    <h1>E-COMMERCE PROFILE</h1>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-3">
                        <ProfileNavbar/>
                    </div>
                    <div className="col-sm-12 col-lg-9">
                        <ProfileData/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;