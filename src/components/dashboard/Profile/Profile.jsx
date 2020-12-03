import React, { useState, useEffect } from 'react';
import profile from '../../../assets/images/profile.jpg';
import M from 'materialize-css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import redux store
import { connect } from 'react-redux';
import { compose } from 'redux';

// actions
import { editContent } from '../../../store/actions/contentActions';

// firestore
import { firestoreConnect } from 'react-redux-firebase';

const Profile = ({auth, contents, editContent}) => {

    const [editContentState, setEditContentState] = useState({
        docId: '',
        contentId: '',
        content: ''
    });

    useEffect(() => {
        const modals = document.querySelectorAll('.modal');
        M.Modal.init(modals);
    }, [])

    const profile = contents && contents.find(content => content.id === 'profile');

    const handleClick = (e) => {
        const updateState = {...editContentState};
        const contentTarget = e.target.parentElement.parentElement.id.split('-');

        updateState.docId = contentTarget[0];
        updateState.contentId = contentTarget[1];

        setEditContentState(updateState);
    }

    const handleChange = (e) => {
        const updateState = {...editContentState};
        updateState.content = e.target.value;
        setEditContentState(updateState);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editContent(editContentState);
    }

    const editContentBtn = auth.uid ? (
        <button className="btn-floating btn-small green accent-4 waves-effect waves-light right modal-trigger" data-target="modalEdit" onClick={handleClick}>
            <i className="material-icons">edit</i>
        </button>
    ) : null;

    const renderContent = profile !== undefined ? (
        <>
        <div className="valign-wrapper">
            <h2 className="green-text text-accent-4">{profile.header}</h2>
            <div id="profile-header">{editContentBtn}</div>
        </div>
        <div className="valign-wrapper">
            <p className="flow-text">{profile.content}</p>
            <div id="profile-content">{editContentBtn}</div>
        </div> 
        </>
    ) : (
        <div className="progress">
            <div className="indeterminate green accent-4"></div>
        </div>
    )

    return (
        <section className="container section scrollspy" id="about">
            <div className="row">
                <div className="col s12 l4">
                    <img src={"https://via.placeholder.com/250"} alt="" className="responsive-img circle"/>
                </div>
                <div className="col s12 l8">
                    {renderContent}
                </div>
            </div>
            <div id="modalEdit" className="modal">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <label htmlFor="edit">Edit</label>
                            <input type="text" id="edit" onChange={handleChange}/>
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
)(Profile);
