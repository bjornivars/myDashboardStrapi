import React from 'react';


const Profile = (props) => {
    return (
        <>
            <div className="row "> 
            <div className="col-md-8 d-flex m-auto profileCard">
                <div className=" d-flex justify-content-center col-md-5">
                    <img className="col-md-12" src={props.Image} alt="Some" />
                </div>
                <div className="col-md-5 m-auto pt-5">
                    <h2>{props.profileTitle}</h2>
                    <p className="mt-5">I am {props.age} years old</p>
                    <p className="mt-5">{props.skills}</p>
                    <p className="mt-5">{props.email}</p>
                </div>
                </div>
            </div>
        </>
    )
}

export default Profile;



