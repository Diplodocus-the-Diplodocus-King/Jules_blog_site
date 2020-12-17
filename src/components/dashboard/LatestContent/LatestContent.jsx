import React from 'react';

// import redux store
import { connect } from 'react-redux';
import { compose } from 'redux';

// firestore
import { firestoreConnect } from 'react-redux-firebase';

const LatestContent = ({articles, interviews}) => {

    const createParas = (content) => {

        const parasArray = content.split('\n').map((para, index) => {
            return <p key={`para${index}`}>{para}</p>
        });
        
        return (
            <>
                {parasArray}
            </>
        );  
    }

    if (articles && interviews){

        return (
            <section className="container section scrollspy" id="photos">
                <h2 className="green-text text-accent-4 center">Featured</h2>
                <div className="row valign-wrapper">
                    <div className="col s12 l4 push-l7 offset-l1">
                        <img src={articles[0].imageUrl} alt="not found" className="responsive-img"/>
                    </div>
                    <div className="col s12 l6 pull-l5 offset-l1">
                        <h4 className="green-text text-accent-4">{articles[0].title}</h4>
                        {createParas(articles[0].abstract)}
                    </div>
                </div>
                <div className="row valign-wrapper">
                        <div className="col s12 l4">
                            <img src={interviews[0].imageUrl} alt="" className="responsive-img"/>
                        </div>
                        <div className="col s12 l6 right-align">
                        <h4 className="green-text text-accent-4">{interviews[0].title}</h4>
                        {createParas(interviews[0].abstract)}
                        </div>
                </div>
                <div className="row valign-wrapper">
                        <div className="col s12 l4 push-l7 offset-l1">
                            <img src={articles[1].imageUrl} alt="" className="responsive-img"/>
                        </div>
                    <div className="col s12 l6 pull-l5 offset-l1">
                        <h4 className="green-text text-accent-4">{articles[1].title}</h4>
                        {createParas(articles[1].abstract)}
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
