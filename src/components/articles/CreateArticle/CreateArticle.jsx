import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

// redux
import { connect } from 'react-redux';

// actions
import { createArticle } from '../../../store/actions/articleActions'; 

const CreateArticle = ({createArticle, auth}) => {

    const [formState, setFormState] = useState({
        title: '',
        subject: '',
        info: '',
        abstract: '',
        content: '',
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
            case 'content':
                currentInput.content = e.target.value;
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
        createArticle(formState);
    }

    if(!auth.uid) return <Redirect to='/signin' />

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create Article</h5>
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
                    <label htmlFor="content">Content</label>
                    <textarea id="content" onChange={handleChange} className="materialize-textarea"/>
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
        createArticle: (article) => dispatch(createArticle(article))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);