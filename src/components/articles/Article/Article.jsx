import React from 'react';
import moment from 'moment';

// redux
import { connect } from 'react-redux';
import { compose } from 'redux';

// firestore
import { firestoreConnect } from 'react-redux-firebase';

const Article = (props) => {

    const { article } = props;

    const createParas = (content, id) => {
        const parasArray = content.split('\n').map((para, index) => {
            return <p key={id+index}>{para}</p>
        });
        
        return (
            <>
                {parasArray}
            </>
        );  
    }

    if (article) {
        return (
            <div className="container section project-details">
                <h3>{article.title}</h3>
                <h4 className="green-text text-accent-4">{article.subject}</h4>
                <div className="flow-text">{createParas(article.abstract, 'abstract')}</div>
                <img src={article.imgUrl} alt="article_img"/>
                {createParas(article.content, 'content')}
                <div>Posted by {article.info}</div>
                <div>{moment(article.created.toDate()).calendar()}</div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p className="flow-text">Loading article...</p>
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    
    const id = ownProps.match.params.id;
    const articles = state.firestore.data.articles;
    const article = articles ? articles[id] : null;

    return {
        article: article
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'articles'}
    ])
)(Article);
