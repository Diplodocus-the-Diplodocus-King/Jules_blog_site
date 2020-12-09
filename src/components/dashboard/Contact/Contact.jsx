import React, { useState, useEffect } from 'react';
import M from 'materialize-css';

// styles
import styles from './Contact.module.scss';

// import redux store
import { connect } from 'react-redux';
import { compose } from 'redux';

// actions
import { editContent } from '../../../store/actions/contentActions';

// firestore
import { firestoreConnect } from 'react-redux-firebase';

const Contact = ({auth, contents, editContent}) => {

    const [editContentState, setEditContentState] = useState({
        docId: '',
        fields: {}
    });
    
    const contact = contents && contents.find(content => content.id === 'contact');

    useEffect(() => {
        const datePicker = document.querySelector('.datepicker');
        const modals = document.querySelectorAll('.modal');
        M.Datepicker.init(datePicker);
        M.Modal.init(modals);
    }, []);

    const handleClick = (e) => {
        const updateState = {...editContentState};
        const contentTarget = e.target.parentElement.parentElement.id.split('-');

        updateState.docId = contentTarget[0];

        setEditContentState(updateState);
    }

    const handleChange = (e) => {
        const updateState = {...editContentState};
        const fieldName = e.target.getAttribute('id').split('-');
        updateState.fields[`${fieldName[1]}`] = e.target.value;
        setEditContentState(updateState);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(editContentState);
        editContent(editContentState);
    }

    const editContentBtn = auth.uid ? (
        <button className="btn-floating btn-small green accent-4 waves-effect waves-light right modal-trigger" data-target="modalEditContact" onClick={handleClick}>
            <i className="material-icons">edit</i>
        </button>
    ) : null;

    const renderContent = contact !== undefined ? (
        <>
            <h2 className="green-text text-accent-4">{contact.header}</h2>
            <p>{contact.content1}</p>
            <p>{contact.content2}</p> 
            <div id="contact-edit">{editContentBtn}</div>
        </>
    ) : (
        <div className="progress">
            <div className="indeterminate green accent-4"></div>
        </div>
    );

    return (
        <section className="section container" id="contact">
            <div className="row">
                <div className="col s12 l5">
                    {renderContent} 
                </div>
                <div className="col s12 l5 offset-l2">
                    <form action="">
                    <div className="input-field">
                        <i className="material-icons prefix green-text text-accent-4">email</i>
                        <input type="email" id="email" className={styles.inputfield} required/>
                        <label htmlFor="email">Your Email</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix green-text text-accent-4">message</i>
                        <textarea id="message" className="materialize-textarea" required></textarea>
                        <label htmlFor="message">Your Message</label>
                    </div>
                    <div className="input-field">
                        <input type="text" id="date" className="datepicker"/>
                        <label htmlFor="date">Choose a date you need me for...</label>
                    </div>
                    <div className="input-field">
                        <p>Services Required...</p>
                        <p>
                            <label>
                                <input type="checkbox"/>
                                <span>Writing</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox"/>
                                <span>Editing</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox"/>
                                <span>Podcasting</span>
                            </label>
                        </p>
                    </div>
                    <div className="input-field center">
                        <button className="btn green accent-4 waves-effect waves-light">Submit</button>
                    </div>
                    </form>
                </div>
            </div>
            <div id="modalEditContact" className="modal">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <h5>Edit Contact</h5>
                        <div className="input-field">
                            <label htmlFor="contact-header">Title</label>
                            <input type="text" id="contact-header" onChange={handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="contact-content1">Paragraph 1</label>
                            <input type="text" id="contact-content1" onChange={handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="contact-content2">Paragraph 2</label>
                            <input type="text" id="contact-content2" onChange={handleChange}/>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn modal-close green accent-4 wave-effect waves-light">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        contents: state.firestore.ordered.contents
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editContent: (editContentState) => dispatch(editContent(editContentState))
    } 
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'contents'}
    ])
)(Contact);
