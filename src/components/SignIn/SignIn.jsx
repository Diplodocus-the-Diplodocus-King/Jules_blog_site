import React, { useState } from 'react';

const SignIn = () => {

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
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn green accent-4">Login</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;