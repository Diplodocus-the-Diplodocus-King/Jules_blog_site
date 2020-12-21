import React, { useState, useEffect } from 'react';
import M from 'materialize-css';

// components & containers
import Post from '../../posts/Post/Post';

// import redux store
import { connect } from 'react-redux';
import { compose } from 'redux';

// actions
import { editContent } from '../../../store/actions/contentActions';
import { deleteArticle } from '../../../store/actions/articleActions';

// firestore
import { firestoreConnect } from 'react-redux-firebase';

const ArticlesPage = ({auth, articles, contents, editContent, deleteArticle}) => {

    const [editContentState, setEditContentState] = useState({
        docId: '',
        fields: {}
    });

    useEffect(() => {
        const modals = document.querySelectorAll('.modal');
        M.Modal.init(modals);
    }, []);

    const articlesPage = contents && contents.find(content => content.id === 'articles');
    
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

    const handleDelete = (article) => {
        deleteArticle(article);
    }

    const renderArticles = articles && articles.map(article => {
        return <Post data={article} handleDelete={handleDelete} key={article.id} />
    });

    const editContentBtn = auth.uid ? (
        <button className="btn-floating btn-small green accent-4 waves-effect waves-light right modal-trigger" data-target="modalEditArticles" onClick={handleClick}>
            <i className="material-icons">edit</i>
        </button>
    ) : null;

    const renderContent = articlesPage !== undefined ? (
        <div className="center">  
            <p className="flow-text articles-header">{articlesPage.header}</p>
            <div id="articles-edit">{editContentBtn}</div>
        </div>
    ) : (
        <div className="progress">
            <div className="indeterminate green accent-4"></div>
        </div>
    );

    return (
        <section className="articles">
            <h2 className="green-text text-accent-4 center">Articles</h2>
            {renderContent}
            {renderArticles}
            <div id="modalEditArticles" className="modal">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <h5>Edit Articles</h5>
                        <div className="input-field">
                            <label htmlFor="articles-header">Title</label>
                            <input type="text" id="articles-header" onChange={handleChange}/>
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
        articles: state.firestore.ordered.articles,
        contents: state.firestore.ordered.contents
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editContent: (editContentState) => dispatch(editContent(editContentState)),
        deleteArticle: (article) => dispatch(deleteArticle(article))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'articles', orderBy: ['created', 'desc']},
        {collection: 'contents'}
    ])
)(ArticlesPage);
