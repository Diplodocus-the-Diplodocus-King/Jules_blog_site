import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <>
            <li><NavLink to='/signin'>Log In</NavLink></li>
        </>
    )
}

export default SignedOutLinks;