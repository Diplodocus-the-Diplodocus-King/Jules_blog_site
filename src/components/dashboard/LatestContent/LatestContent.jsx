import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import "aos/dist/aos.css";

// import redux store
import { connect } from 'react-redux';
import { compose } from 'redux';

// firestore
import { firestoreConnect } from 'react-redux-firebase';

const LatestContent = ({articles, interviews}) => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        AOS.refresh();
    }, []);

    const renderLink = (content) => {
        if (content.webLink.length){
            return(
                <a href={content.webLink} className="btn-small green accent-4" target="_blank" rel="noreferrer noopener">Read More</a>
            )
        } else {
            return(
                <Link to={'/articles/' + content.id}>
                    <button className="btn-small green accent-4">
                        Read More
                    </button>
                </Link>
            )
        }
    }

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
            <section className="container section scrollspy" id="featured">
                <h2 className="green-text text-accent-4 center">Featured</h2>
                <div className="row" data-aos="fade-right">
                    <div className="col s12 l6 push-l6">
                        <img src={articles[0].imageUrl} alt="not found" className="responsive-img"/>
                    </div>
                    <div className="col s12 l6 pull-l6">
                        <h4 className="green-text text-accent-4">{articles[0].title}</h4>
                        {createParas(articles[0].abstract)}
                        <div className="center">
                            {renderLink(articles[0])}
                        </div>
                    </div>
                </div>
                <hr className="container grey darken-1"/>
                <div className="row" data-aos="fade-left">
                        <div className="col s12 l6">
                            <img src={interviews[0].imageUrl} alt="" className="responsive-img"/>
                        </div>
                        <div className="col s12 l6">
                        <h4 className="green-text text-accent-4">{interviews[0].title}</h4>
                        {createParas(interviews[0].abstract)}
                        <div className="center">
                            {renderLink(interviews[0])}
                        </div>
                        </div>
                </div>
                <hr className="container grey darken-1"/>
                <div className="row" data-aos="fade-right">
                        <div className="col s12 l6 push-l6">
                            <img src={articles[1].imageUrl} alt="" className="responsive-img"/>
                        </div>
                    <div className="col s12 l6 pull-l6">
                        <h4 className="green-text text-accent-4">{articles[1].title}</h4>
                        {createParas(articles[1].abstract)}
                        <div className="center">
                            {renderLink(articles[1])}
                        </div>
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
