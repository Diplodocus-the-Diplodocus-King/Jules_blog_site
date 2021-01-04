import React, { useState, useEffect } from 'react';
import M from 'materialize-css';

// components & containers
import Post from '../../posts/Post/Post';

// import redux store
import { connect } from 'react-redux';
import { compose } from 'redux';

// actions
import { editContent } from '../../../store/actions/contentActions';
import { deleteInterview } from '../../../store/actions/interviewActions';

// firebase
import { firestoreConnect } from 'react-redux-firebase';

const InterviewsPage = ({auth, interviews, contents, editContent, deleteInterview}) => {

    const [editContentState, setEditContentState] = useState({
        docId: '',
        fields: {}
    });

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const modals = document.querySelectorAll('.modal');
        M.Modal.init(modals);
    }, []);

    const interviewsPage = contents && contents.find(content => content.id === 'interviews');

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
        console.log(editContentState)
        editContent(editContentState);
    }

    const handleDelete = (interview) => {
        deleteInterview(interview);
    }

    const renderInterviews = interviews && interviews.map(interview => {
        if(searchValue.length !== 0 && (interview.title.toLowerCase().includes(searchValue) || interview.subject.toLowerCase().includes(searchValue))){
            return <Post data={interview} handleDelete={handleDelete} key={interview.id} />
        } else if (searchValue.length === 0) {
            return <Post data={interview} handleDelete={handleDelete} key={interview.id} />
        }
    });

    const handleSearch = (e) => {
        setSearchValue(e.target.value.toLowerCase());
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    }

    const editContentBtn = auth.uid ? (
        <button className="btn-floating btn-small green accent-4 waves-effect waves-light right modal-trigger" data-target="modalEditInterviews" onClick={handleClick}>
            <i className="material-icons">edit</i>
        </button>
    ) : null;

    const renderContent = InterviewsPage !== undefined ? (
        <div className="center">  
            <p className="flow-text interview-header">{interviewsPage.header}</p>
            <div id="interviews-edit">{editContentBtn}</div>
            <div className="container">
                <form onSubmit={handleSearchSubmit}>
                    <div className="input-field">
                        <label htmlFor="search">Search</label>
                        <input type="text" id="search" onChange={handleSearch}/>
                    </div>
                </form>
            </div>
        </div>
    ) : (
        <div className="progress">
            <div className="indeterminate green accent-4"></div>
        </div>
    );

    return (
        <section className="interviews">
            <h2 className="green-text text-accent-4 center">Interviews</h2>
            {renderContent}
            {renderInterviews}
            <div id="modalEditInterviews" className="modal">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <h5>Edit Interviews</h5>
                        <div className="input-field">
                            <label htmlFor="interviews-header">Title</label>
                            <input type="text" id="interviews-header" onChange={handleChange}/>
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
        interviews: state.firestore.ordered.interviews,
        contents: state.firestore.ordered.contents
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editContent: (editContentState) => dispatch(editContent(editContentState)),
        deleteInterview: (interview) => dispatch(deleteInterview(interview))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'interviews', orderBy:['created', 'desc']},
        {collection: 'contents'}
    ])
)(InterviewsPage);
