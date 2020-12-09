import React, { useState, useEffect } from 'react';
import M from 'materialize-css';

// import redux store
import { connect } from 'react-redux';
import { compose } from 'redux';

// actions
import { editContent } from '../../../store/actions/contentActions';

// firestore
import { firestoreConnect } from 'react-redux-firebase';
import { prefix } from '@fortawesome/free-brands-svg-icons';

const About = ({auth, contents, editContent}) => {

    const [editContentState, setEditContentState] = useState({
        docId: '',
        prefix: '',
        fields: {}
    });

    useEffect(() => {
        const modals = document.querySelectorAll('.modal');
        M.Modal.init(modals);
    }, [])

    const about = contents && contents.find(content => content.id === 'about');

    useEffect(() => {
        const tabs = document.querySelectorAll('.tabs');
        M.Tabs.init(tabs);
    }, [about]);

    const handleClick = (e) => {
        const updateState = {...editContentState};
        const contentTarget = e.target.parentElement.parentElement.id.split('-');

        updateState.docId = contentTarget[0];
        updateState.prefix = contentTarget[1]

        setEditContentState(updateState);
    }

    const handleChange = (e) => {
        const updateState = {...editContentState};
        const fieldName = e.target.getAttribute('id').split('-');

        if(fieldName[0] === 'tab'){
            updateState.fields[`${editContentState.prefix}${fieldName[1]}`] = e.target.value;
        } else {
            updateState.fields[`${fieldName[1]}`] = e.target.value;
        }
        
        setEditContentState(updateState);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editContent(editContentState);
    }

    const editContentBtn = auth.uid ? (
        <button className="btn-floating btn-small green accent-4 waves-effect waves-light right modal-trigger" data-target="modalEditAbout" onClick={handleClick}>
            <i className="material-icons">edit</i>
        </button>
    ) : null;

    const editTabContentBtn = auth.uid ? (
        <button className="btn-floating btn-small green accent-4 waves-effect waves-light right modal-trigger" data-target="modalEditTabs" onClick={handleClick}>
            <i className="material-icons">edit</i>
        </button>
    ) : null;

    const renderContent = about !== undefined ? (
        <div className="row">
            <div className="col s12 l4">
                    <h2 className="green-text text-accent-4">{about.header}</h2>
                    <p>{about.content1}</p>        
                    <p>{about.content2}</p>
                    <div id="about-edit">{editContentBtn}</div>
            </div>
            <div className="col s12 l6 offset-l2">
                <ul className="tabs">
                <li className="tab col s6">
                    <a href="#writing" className="green-text text-accent-4">{about.tab1Title}</a>
                </li>
                <li className="tab col s6">
                    <a href="#podcasting" className="green-text text-accent-4">{about.tab2Title}</a>
                </li>
                </ul>
                <div className="col s12" id="writing">
                        <p className="flow-text green-text text-accent-4">{about.tab1Header}</p>
                        <p>{about.tab1ContentA}</p>
                        <p>{about.tab1ContentB}</p>
                        <div id="about-tab1-edit">{editTabContentBtn}</div>
                </div>
                <div className="col s12" id="podcasting">
                        <p className="flow-text green-text text-accent-4">{about.tab2Header}</p>
                        <p>{about.tab2ContentA}</p>
                        <p>{about.tab2ContentB}</p>
                        <div id="about-tab2-edit">{editTabContentBtn}</div>
                </div>
            </div>
        </div>
    ) : (
        <div className="progress">
            <div className="indeterminate green accent-4"></div>
        </div>
    );

    return (
        <section className="container section" id="services">
            {renderContent}
            <div id="modalEditAbout" className="modal">
                <div className="modal-content">
                    <h5>Edit About</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <label htmlFor="about-header">Title</label>
                            <input type="text" id="about-header" onChange={handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="about-para1">Paragraph 1</label>
                            <input type="text" id="about-content1" onChange={handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="about-para2">Paragraph 2</label>
                            <input type="text" id="about-content2" onChange={handleChange}/>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn modal-close green accent-4 wave-effect waves-light">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div id="modalEditTabs" className="modal">
                <div className="modal-content">
                    <h5>Edit Tab</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <label htmlFor="tab-Title">Tab Name</label>
                            <input type="text" id="tab-Title" onChange={handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="tab-Header">Tab Title</label>
                            <input type="text" id="tab-Header" onChange={handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="tab-ContentA">Tab Paragraph 1</label>
                            <input type="text" id="tab-ContentA" onChange={handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="tab-ContentB">Tab Paragraph 2</label>
                            <input type="text" id="tab-ContentB" onChange={handleChange}/>
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
)(About);

