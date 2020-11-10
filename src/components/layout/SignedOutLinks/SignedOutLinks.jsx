import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <>
            <li><NavLink to='/signin' className="green-text text-accent-4">Log In</NavLink></li>
        </>
    )
}

export default SignedOutLinks;