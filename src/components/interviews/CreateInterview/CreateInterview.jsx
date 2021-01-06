import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import M from 'materialize-css';
import moment from 'moment';

// redux
import { connect } from 'react-redux';

// actions
import { createInterview, editInterview } from '../../../store/actions/interviewActions'; 

const CreateInterview = ({createInterview, editInterview, auth, history, location}) => {

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

        // load data in only for editting articles.
        if(location.state !== null){

            setFormState(location.state.post);

            document.querySelector('form').querySelectorAll('label').forEach(label => {
                if(location.state.post[`${label.getAttribute('for')}`].length !== 0){
                    label.classList.add('active');
                } 
            });

            document.getElementById('title').value = location.state.post.title;
            document.getElementById('subject').value = location.state.post.subject;
            document.getElementById('abstract').value = location.state.post.abstract;
            document.getElementById('author').value = location.state.post.author;
            document.getElementById('info').value = location.state.post.info;
            document.getElementById('created').value = moment(location.state.post.created.toDate());
            document.getElementById('imageUrl').value = location.state.post.imageUrl;
            document.getElementById('webLink').value = location.state.post.webLink;
        }

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
        const dateInput = document.querySelector('#created');

        if(dateInput.value.length){
            currentInput.created = new Date(dateInput.value);
        }

        if(location.state !== null){
            editInterview(currentInput);
        } else {
            createInterview(currentInput);
        }

        history.push('/interviews');
    }

    const formText = location.state !== null ? 'Edit' : 'Create'

    if(!auth.uid) return <Redirect to='/signin' />

    return (
        <div className="form-container">
            <div className="container">
                <form onSubmit={handleSubmit} className="white">
                    <h3 className="green-text text-accent-4 center">{formText} Interview</h3>
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
                        <label htmlFor="created">Date</label>
                        <input type="text" id="created" className="datepicker"/>
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
                        <button className="btn green accent-4">{formText}</button>
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
        createInterview: (interview) => dispatch(createInterview(interview)),
        editInterview: (interview) => dispatch(editInterview(interview))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateInterview);