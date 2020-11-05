import React from 'react';
import { NavLink } from 'react-router-dom';

// redux
import { connect } from 'react-redux';

// actions
import { signOut } from '../../../store/actions/authActions';

const SignedInLinks = ({signOut}) => {
    return (
        <>
            <li><NavLink to='/createarticle'>Create Article</NavLink></li>
            <li><NavLink to='/createinterview'>Create Interview</NavLink></li>
            <li><a onClick={signOut}>Log Out</a></li>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
