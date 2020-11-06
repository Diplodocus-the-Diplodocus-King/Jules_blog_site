import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

//styles
import styles from './Post.module.scss';

const Post = ({data}) => {

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

    return (
        <article className="container">
            <div className="post card">
                <div className="card-content row">
                <img src={data.image} alt="placeholder" className="col s3 m3 l3"/>
                    <h4 className="col s9 m9 l9">{data.title}</h4>
                    <p className="col s9 m9 l9 flow-text green-text text-accent-4">{moment(data.created.toDate()).calendar()} ({data.subject})</p>
                    <p className="col s9 m9 l9">{data.abstract}</p>                    
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

export default Post;
