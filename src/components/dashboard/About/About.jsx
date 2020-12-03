import React, { useEffect } from 'react';
import M from 'materialize-css';

// import redux store
import { connect } from 'react-redux';
import { compose } from 'redux';

// firestore
import { firestoreConnect } from 'react-redux-firebase';

const About = ({contents}) => {

    const about = contents && contents.find(content => content.id === 'about');

    useEffect(() => {
        const tabs = document.querySelectorAll('.tabs');
        M.Tabs.init(tabs);
    }, [about]);

    const renderContent = about !== undefined ? (
        <div className="row">
            <div className="col s12 l4">
                <h2 className="green-text text-accent-4">{about.header}</h2>
                <p>{about.content1}</p>
                <p>{about.content2}</p>
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
                </div>
                <div className="col s12" id="podcasting">
                <p className="flow-text green-text text-accent-4">{about.tab2Header}</p>
                <p>{about.tab2ContentA}</p>
                <p>{about.tab2ContentB}</p>
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
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        contents: state.firestore.ordered.contents
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'contents'}
    ])
)(About);

