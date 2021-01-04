import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import M from 'materialize-css';

// redux
import { connect } from 'react-redux';

// actions
import { createInterview } from '../../../store/actions/interviewActions'; 

const CreateInterview = ({createInterview, auth, history}) => {

    const [formState, setFormState] = useState({
        title: '',
        subject: '',
        info: '',
        abstract: '',
        author: '',
        webLink: '',
        imageUrl: '',
        created: new Date() 
    });

    useEffect(() => {
        const datePicker = document.querySelector('.datepicker');
        M.Datepicker.init(datePicker);
    }, []);

    const handleChange = (e) => {
        const currentInput = {...formState};

        switch(e.target.id){
            case 'title':
                currentInput.title = e.target.value;
                break;
            case 'subject':
                currentInput.subject = e.target.value;
                break;
            case 'info':
                currentInput.info = e.target.value;
                break;
            case 'abstract':
                currentInput.abstract = e.target.value;
                break;
            case 'author':
                currentInput.author = e.target.value;
                break;
            case 'webLink':
                currentInput.webLink = e.target.value;
                break;
            case 'imageUrl':
                currentInput.imageUrl = e.target.value;
        }
        setFormState(currentInput);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentInput = {...formState};
        const dateInput = document.querySelector('#date');
        if(dateInput.value.length){
            currentInput.created = new Date(dateInput.value);
        }
        createInterview(currentInput);
        history.push('/interviews');
    }

    if(!auth.uid) return <Redirect to='/signin' />

    return (
        <div className="form-container">
            <div className="container">
                <form onSubmit={handleSubmit} className="white">
                    <h3 className="green-text text-accent-4 center">Create Interview</h3>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" onChange={handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="abstract">Abstract</label>
                        <textarea id="abstract" onChange={handleChange} className="materialize-textarea"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" onChange={handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="info">Additional info</label>
                        <input type="text" id="info" onChange={handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="date">Date</label>
                        <input type="text" id="date" className="datepicker"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="imageUrl">Image URL</label>
                        <input type="text" id="imageUrl" onChange={handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="webLink">Web Link</label>
                        <input type="text" id="webLink" onChange={handleChange}/>
                    </div>
                    <div className="input-field center create-btn">
                        <button className="btn green accent-4">Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createInterview: (interview) => dispatch(createInterview(interview))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateInterview);