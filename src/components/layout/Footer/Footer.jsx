import React, { useState, useEffect } from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import M from 'materialize-css';

// import redux store
import { connect } from 'react-redux';
import { compose } from 'redux';

// actions
import { editContent } from '../../../store/actions/contentActions';

// firestore
import { firestoreConnect } from 'react-redux-firebase';

const Footer = ({auth, contents, editContent}) => {

    const [editContentState, setEditContentState] = useState({
        docId: '',
        fields: {}
    });

    useEffect(() => {
        const modals = document.querySelectorAll('.modal');
        M.Modal.init(modals);
    }, []);

    const footer = contents && contents.find(content => content.id === 'footer');

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
        editContent(editContentState);
    }

    const editContentBtn = auth.uid ? (
        <button className="btn-floating btn-small green accent-4 waves-effect waves-light right modal-trigger" data-target="modalEditFooter" onClick={handleClick}>
            <i className="material-icons">edit</i>
        </button>
    ) : null;

    const renderContent = footer !== undefined ? (
        <>
            <h5>{footer.header}</h5>
            <div id="footer-edit">{editContentBtn}</div>
            <p>{footer.content}</p>
        </>
    ) : (
        <div className="progress">
            <div className="indeterminate green accent-4"></div>
        </div> 
    );

    return (
        <footer className="page-footer grey darken-3">
            <div className="container">
                <div className="row">
                    <div className="col s12 l6">
                        {renderContent}
                    </div>
                    <div className="col s12 l4 offset-l2 connect">
                        <h5>Connect</h5>
                        <a href="#" className="grey-text text-lighten-3"><FontAwesomeIcon icon={['fab', 'facebook-square']} className={styles.connecticon} /></a>
                        <a href="#" className="grey-text text-lighten-3"><FontAwesomeIcon icon={['fab', 'twitter']} className={styles.connecticon} /></a>
                        <a href="#" className="grey-text text-lighten-3"><FontAwesomeIcon icon={['fab', 'linkedin']} className={styles.connecticon} /></a>
                        <a href="#" className="grey-text text-lighten-3"><FontAwesomeIcon icon={['fab', 'instagram']} className={styles.connecticon} /></a>
                    </div>
                </div>
                </div>
                <div className="footer-copyright grey darken-4">
                <div className="container center">
                    &copy; 2020 Julia Lagoutte
                </div>
            </div>
            <div id="modalEditFooter" className="modal">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <h5 className="grey-text text-darken-4">Edit Profile</h5>
                        <div className="input-field">
                            <label htmlFor="footer-header">Title</label>
                            <input type="text" id="footer-header" onChange={handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="footer-content">Content</label>
                            <input type="text" id="footer-content" onChange={handleChange}/>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn modal-close green accent-4 wave-effect waves-light">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
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
)(Footer);
