import React from 'react';

// components & containers
import Post from '../../components/Post/Post';

const InterviewsPage = () => {
    return (
        <section className="articles container">
            <h2 className="green-text text-accent-4 center">Interviews</h2>
            <p className="flow-text center">Here you can find all the interviews I have conducted from 2017 to the present day. Enjoy!</p>
            <Post />
            <Post />
            <Post />
        </section>
    )
}

export default InterviewsPage;
