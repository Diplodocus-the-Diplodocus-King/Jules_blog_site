import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

// redux
import { connect } from 'react-redux';

// actions
import { signIn } from '../../../store/actions/authActions';

const SignIn = ({signIn, authError, auth}) => {

    const [formState, setFormState] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const currentInput = {...formState};

        if(e.target.id === 'email'){
            currentInput.email = e.target.value;
        } else if(e.target.id === 'password'){
            currentInput.password = e.target.value;
        }

        setFormState(currentInput);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(formState);
    }

    const loginOutcome = authError ? <p>{authError}</p> : null

    if(auth.uid) return <Redirect to='/' />

    return (
        <div className="form-container">
            <div className="container">
                <form onSubmit={handleSubmit} className="white login-form">
                    <h3 className="grey-text text-darken-3 center">Login</h3>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn green accent-4 right">Login</button>
                        <div className="red-text center flow-text">{loginOutcome}</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);