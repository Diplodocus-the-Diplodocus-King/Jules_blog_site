import React, { useState, useEffect } from 'react';
import profileImage from '../../../assets/images/profile.jpg';
import M from 'materialize-css';

import AOS from 'aos';
import "aos/dist/aos.css";

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
        fields: {}
    });

    useEffect(() => {
        const modals = document.querySelectorAll('.modal');
        M.Modal.init(modals);
        AOS.init({
            duration: 2000
        });
        AOS.refresh();
    }, []);

    const profile = contents && contents.find(content => content.id === 'profile');

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
        <button className="btn-floating btn-small green accent-4 waves-effect waves-light right modal-trigger" data-target="modalEditProfile" onClick={handleClick}>
            <i className="material-icons">edit</i>
        </button>
    ) : null;

    const renderContent = profile !== undefined ? (
        <>  
            <h2 className="green-text text-accent-4">{profile.header}</h2>
            <div id="profile-edit">{editContentBtn}</div>
            <p className="flow-text">{profile.content}</p>
        </>
    ) : (
        <div className="progress">
            <div className="indeterminate green accent-4"></div>
        </div>
    );

    return (
        <section className="container section scrollspy" id="about">
            <div className="row" data-aos="fade-down">
                <div className="col s12 m4 l3 center">
                    <img src={profileImage} alt="" className="responsive-img circle"/>
                </div>
                <div className="col s12 m7 l8">
                    {renderContent}
                </div>
            </div>
            <div id="modalEditProfile" className="modal">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <h5>Edit Profile</h5>
                        <div className="input-field">
                            <label htmlFor="profile-header">Title</label>
                            <input type="text" id="profile-header" onChange={handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="profile-content">Bio</label>
                            <input type="text" id="profile-content" onChange={handleChange}/>
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
