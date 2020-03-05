import React from 'react';

const Login = (props) => {
    return (
        <>
            <div>
                <h2>{props.loginTitle}</h2>
                <p>{props.loginText}</p>
            </div>
        </>
    )
}
export default Login;


