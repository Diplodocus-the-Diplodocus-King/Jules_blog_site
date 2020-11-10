import React from 'react';

// import redux store
import { connect } from 'react-redux';
import { compose } from 'redux';

// firestore
import { firestoreConnect } from 'react-redux-firebase';

// images
import bgpp from '../../../assets/images/bgpp-logo-dark-2.jpg';
import greenWave from '../../../assets/images/green-wave-podcast-logo.jpg';
import greenSpace from '../../../assets/images/green-space-logo.jpg';

const LatestContent = ({articles, interviews}) => {

    if (articles && interviews){
        return (
            <section className="container section scrollspy" id="photos">
                <h2 className="green-text text-accent-4 center">Featured</h2>
                <div className="row">
                    <div className="col s12 l4 push-l7 offset-l1">
                        <img src={bgpp} alt="not found" className="responsive-img"/>
                    </div>
                    <div className="col s12 l6 pull-l5 offset-l1">
                        <h3 className="green-text text-accent-4">{articles[0].title}</h3>
                        <p>{articles[0].abstract}</p>
                    </div>
                </div>
                <div className="row">
                        <div className="col s12 l4">
                            <img src={greenWave} alt="" className="responsive-img"/>
                        </div>
                        <div className="col s12 l6 right-align">
                        <h3 className="green-text text-accent-4">{interviews[0].title}</h3>
                            <p>{interviews[0].abstract}</p>
                        </div>
                </div>
                <div className="row">
                        <div className="col s12 l4 push-l7 offset-l1">
                            <img src={greenSpace} alt="" className="responsive-img"/>
                        </div>
                    <div className="col s12 l6 pull-l5 offset-l1">
                        <h3 className="green-text text-accent-4">{articles[1].title}</h3>
                        <p>{articles[1].abstract}</p>
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <section className="container section scrollspy" id="photos">
        <h2 className="green-text text-accent-4 center">Featured</h2>
        <p className="flow-text">Loading...</p>
        </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.firestore.ordered.articles,
        interviews: state.firestore.ordered.interviews
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'articles', limit: 2, orderBy: ['created', 'desc']},
        {collection: 'interviews', limit: 2, orderBy: ['created', 'desc']},
    ])
)(LatestContent);
