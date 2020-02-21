import React from 'react';

const Header = (props) => {
    console.log(props);

    return(
        <div style={headerStyle}>
            <ul style={headerStyle}>
                <li><a href="" style={headerStyle}>{props.dashboardlink}</a></li>
                <li><a href="" style={headerStyle}>{props.bloglink}</a></li>
                <li><a href="" style={headerStyle}>{props.joblink}</a></li>
                <li><a href="" style={headerStyle}>{props.logout}</a></li>
            </ul>


        </div>
    )
}

const headerStyle = {
    backgroundColor: '#0622AD',
    color: 'white',
    listStyleType: 'none',
    display: 'flex',
}

export default Header;
