import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

// import redux store
import { connect } from 'react-redux';

//styles
import styles from './Post.module.scss';

const Post = ({data, auth, handleDelete}) => {

    const renderLink = () => {
        if (data.webLink.length){
            return(
                <a href={data.webLink} className="btn green accent-4" target="_blank" rel="noreferrer noopener">Read</a>
            )
        } else {
            return(
                <Link to={'/articles/' + data.id}>
                    <button className="btn green accent-4">
                        Read More
                    </button>
                </Link>
            )
        }
    }

    const createParas = (content) => {
        const parasArray = content.split('\n').map((para, index) => {
            return <p className="col s12 m12 l12" key={`para${index}`}>{para}</p>
        });
        
        return (
            <>
                {parasArray}
            </>
        );  
    }

    const renderDelete = auth.uid ? (
        <button className="btn-floating btn-small green accent-4 waves-effect waves-light right" onClick={() => handleDelete(data)}>
            <i className="material-icons">delete</i>
        </button>
    ) : null;

    return (
        <article className="container">
            <div className="post card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img src={data.imageUrl} alt="placeholder" className="activator responsive-img"/>
                </div>
                <div className="card-content row">
                <div className="right">
                    {renderDelete}
                </div>
                    <span className="card-title activator green-text text-accent-4 flow-text col s10 m10 l10">{data.title}</span>           
                    <div className="col s2 m2 l2">
                        {renderLink()}
                    </div>
                </div>
                <div className="card-reveal">
                    <div className="container">
                        <span className="card-title green-text text-accent-4 flow-text center">{data.title}</span>
                        {createParas(data.abstract)}
                        <div className="center">
                            {renderLink()}
                        </div>
                    </div>
                
                </div> 
                <div className="card-action grey lighten-4 grey-text">
                    <p>{moment(data.created.toDate()).calendar()} ({data.subject})</p>
                    <div>{data.info}</div>
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
