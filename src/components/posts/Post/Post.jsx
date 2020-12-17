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
                <a href={data.webLink} className="btn green accent-4" target="_blank" rel="noreferrer noopener">Read More</a>
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
                <div className="card-content row">
                <img src={data.imageUrl} alt="placeholder" className="col s3 m3 l3"/>
                <div className="right">
                    {renderDelete}
                </div>
                    <h4 className="col s9 m9 l9">{data.title}</h4>
                    <p className="col s9 m9 l9 flow-text green-text text-accent-4">{moment(data.created.toDate()).calendar()} ({data.subject})</p>
                    <div className="col s12 m12 l12">
                    {createParas(data.abstract)}
                    </div>            
                    <div className="right">
                        {renderLink()}
                    </div>
                </div>
                <div className="card-action grey lighten-4 grey-text">
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
