import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <>
            <li><NavLink to='/createarticle'>Create Article</NavLink></li>
            <li><NavLink to='/createinterview'>Create Interview</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
        </>
    )
}

export default SignedInLinks;
