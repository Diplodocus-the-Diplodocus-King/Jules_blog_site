import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import AOS from 'aos';
import "aos/dist/aos.css";

// import redux store
import { connect } from 'react-redux';

//styles
import styles from './Post.module.scss';

const Post = ({data, auth, handleDelete, type}) => {

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
        AOS.refresh();
    });

    const renderLink = () => {
        if (data.webLink.length){
            return(
                <a href={data.webLink} className="btn green accent-4" target="_blank" rel="noreferrer noopener">More</a>
            )
        } else {
            return(
                <Link to={'/articles/' + data.id}>
                    <button className="btn green accent-4">
                        More
                    </button>
                </Link>
            )
        }
    }

    const createParas = (content) => {
        let abstractLengthCounter = 0;
        const parasArray = content.split('\n').map((para, index) => {
            abstractLengthCounter += para.length;
            if (abstractLengthCounter <= 500){
                return (
                    <p className="col s12 m12 l12 card-para" key={`para${index}`}>{para}</p>
                )
            } else {
                return null
            }        
        });
        
        return (
            <>
                {parasArray}
            </>
        );  
    }

    const renderEdit = auth.uid ? (
            <Link to={{
                pathname: `/create${type}`,
                state: {post: data}
            }}>
            <button className="btn-floating btn-small orange accent-4 waves-effect waves-light right">
                <i className="material-icons">edit</i>
            </button>
            </Link>
        ) : null
    

    const renderDelete = auth.uid ? (
            <button className="btn-floating btn-small red accent-4 waves-effect waves-light right" onClick={() => handleDelete(data)}>
                <i className="material-icons">delete</i>
            </button>
    ) : null;


    return (
        <article className="container" data-aos="fade-up" id={data.id}>
            <div className="post card horizontal">
                <div className="card-image hide-on-med-and-down valign-wrapper grey darken-4">
                    <img src={data.imageUrl} alt="placeholder" className="responsive-img"/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                    <div className="right">
                        {renderDelete}
                        {renderEdit}
                    </div>
                        <span className="card-title green-text text-accent-4 flow-text">{data.title}</span> 
                        <span className="card-subject">{data.subject}</span>
                        {createParas(data.abstract)}       
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div className="row valign-wrapper card-table">
                            <div className="action-content col s9 m10 l10">
                                <p>Posted by {data.author}, {moment(data.created.toDate()).calendar()}</p>
                                <p>{data.info}</p> 
                            </div>
                            <div className="right col s3 m2 l2">
                                {renderLink()}
                            </div> 
                        </div>
                    </div> 
                </div> 
            </div>
        </article>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Post);
