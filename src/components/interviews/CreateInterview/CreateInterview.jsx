import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

// redux
import { connect } from 'react-redux';
import { createArticle } from '../../../store/actions/articleActions';

// actions
import { createInterview } from '../../../store/actions/interviewActions'; 

const CreateInterview = ({createInterview, auth}) => {

    const [formState, setFormState] = useState({
        title: '',
        subject: '',
        info: '',
        abstract: '',
        webLink: '',
        imageUrl: '',
        created: new Date().toDateString()  
    });

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
        createInterview(formState);
    }

    if(!auth.uid) return <Redirect to='/signin' />

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create Interview</h5>
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
                    <label htmlFor="info">Additional info</label>
                    <input type="text" id="info" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" id="imageUrl" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="webLink">Web Link</label>
                    <input type="text" id="webLink" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn green accent-4">Create</button>
                </div>
            </form>
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