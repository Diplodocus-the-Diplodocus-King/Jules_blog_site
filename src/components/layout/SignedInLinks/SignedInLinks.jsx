import React from 'react';
import { NavLink } from 'react-router-dom';

// redux
import { connect } from 'react-redux';

// actions
import { signOut } from '../../../store/actions/authActions';

const SignedInLinks = ({signOut}) => {
    return (
        <>
            <li><NavLink to='/createarticle' className="green-text text-accent-4">Create Article</NavLink></li>
            <li><NavLink to='/createinterview' className="green-text text-accent-4">Create Interview</NavLink></li>
            <li className="divider"></li>
            <li><a className="green-text text-accent-4" onClick={signOut}>Log Out</a></li>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
