import React, { useEffect } from 'react';
import M from 'materialize-css';

// styles
import styles from './Contact.module.scss';

// import redux store
import { connect } from 'react-redux';
import { compose } from 'redux';

// firestore
import { firestoreConnect } from 'react-redux-firebase';

const Contact = ({contents}) => {
    
    const contact = contents && contents.find(content => content.id === 'contact');

    useEffect(() => {
        const datePicker = document.querySelector('.datepicker');
        M.Datepicker.init(datePicker);
    }, []);

    const renderContent = contact !== undefined ? (
        <>
            <h2 className="green-text text-accent-4">{contact.header}</h2>
            <p>{contact.content1}</p>
            <p>{contact.content2}</p> 
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
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        contents: state.firestore.ordered.contents
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'contents'}
    ])
)(Contact);
