import React from 'react';


const Profile = (props) => {
    return (
        <>
            <div> 
                <div className=" d-flex justify-content-center ">
                    <img className="col-md-3" src={props.Image} alt="Some" />
                </div>
                <div className="col-md-5 m-auto pt-5">
                    <h2>{props.profileTitle}</h2>
                    <p className="mt-5">{props.age}</p>
                    <p className="mt-5">{props.skills}</p>
                    <p className="mt-5">{props.email}</p>
                </div>
            </div>
        </>
    )
}

export default Profile;



