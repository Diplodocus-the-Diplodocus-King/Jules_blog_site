import React from 'react';

// components & containers
import Post from '../../components/Post/Post';

const ArticlesPage = () => {
    return (
        <section className="articles container">
            <h2 className="green-text text-accent-4 center">Articles</h2>
            <p className="flow-text center">Here you can find all the articles I have published from 2012 to the present day. Enjoy!</p>
            <Post />
            <Post />
            <Post />
        </section>
    )
}

export default ArticlesPage;
