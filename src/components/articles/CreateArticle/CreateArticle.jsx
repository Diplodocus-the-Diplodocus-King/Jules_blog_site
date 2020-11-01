import React, { useState } from 'react';

// redux
import { connect } from 'react-redux';

// actions
import { createArticle } from '../../../store/actions/articleActions'; 

const CreateArticle = ({createArticle}) => {

    const [formState, setFormState] = useState({
        title: '',
        subject: '',
        date: new Date(),
        imageUrl: '',
        abstract: '',
        content: '',
        webLink: ''
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
            case 'imageUrl':
                currentInput.imageUrl = e.target.value;
                break;
            case 'abstract':
                currentInput.abstract = e.target.value;
                break;
            case 'content':
                currentInput.content = e.target.value;
                break;
            case 'webLink':
                currentInput.webLink = e.target.value;
        }

        setFormState(currentInput);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createArticle(formState);
    }

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
                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" id="imageUrl" onChange={handleChange}/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        createArticle: (article) => dispatch(createArticle(article))
    }
}

export default connect(null, mapDispatchToProps)(CreateArticle);