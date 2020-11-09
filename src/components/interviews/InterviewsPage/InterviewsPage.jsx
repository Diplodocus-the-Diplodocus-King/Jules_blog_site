import React from 'react';

// components & containers
import Post from '../../posts/Post/Post';

// import redux store
import { connect } from 'react-redux';
import { compose } from 'redux';

// firebase
import { firestoreConnect } from 'react-redux-firebase';

const InterviewsPage = ({interviews}) => {

    const renderInterviews = interviews && interviews.map(interview => {
        return <Post data={interview} key={interview.id} />
    });

    return (
        <section className="articles container">
            <h2 className="green-text text-accent-4 center">Interviews</h2>
            <p className="flow-text center">Here you can find all the interviews I have conducted from 2017 to the present day. Enjoy!</p>
            {renderInterviews}
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        interviews: state.firestore.ordered.interviews
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'interviews', orderBy:['created', 'desc']}
    ])
)(InterviewsPage);
