import React from 'react';


const Profile = (prop) => {
    return(
        <>
        <div>
            <h2>{prop.profileTitle}</h2>
            <p>{prop.profileTitle}</p>
        </div>

        </>
    )
}





export default Profile;


{/*  
fetch('http://localhost:1337/Bjornivars')
.then(response => { return response.json()})
.then(result => console.log(result))
*/}

