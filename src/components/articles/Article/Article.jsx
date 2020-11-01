import React from 'react';

const Article = (props) => {

    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Corrupti ipsum ipsam accusamus adipisci doloremque culpa vel architecto ut nulla, 
                        accusantium totam enim error aliquid eligendi in deleniti. Nam, eius odio?
                    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Diplodocus</div>
                    <div>31st October, 3pm</div>
                </div>
            </div>
        </div>
    )
}

export default Article;
