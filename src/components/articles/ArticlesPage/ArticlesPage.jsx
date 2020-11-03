import React from 'react';

// components & containers
import Post from '../../posts/Post/Post';

// import redux store
import { connect } from 'react-redux';
import { compose } from 'redux';

// firestore
import { firestoreConnect } from 'react-redux-firebase';

const ArticlesPage = ({articles}) => {

    const renderArticles = articles && articles.map(article => {
        return <Post data={article} key={article.id} />
    });  

    return (
        <section className="articles container">
            <h2 className="green-text text-accent-4 center">Articles</h2>
            <p className="flow-text center">Here you can find all the articles I have published from 2012 to the present day. Enjoy!</p>
            {renderArticles}
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        articles: state.firestore.ordered.articles
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'articles'}
    ])
)(ArticlesPage);
