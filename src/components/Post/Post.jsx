import React from 'react';

//styles
import styles from './Post.module.scss';

const Post = () => {
    return (
        <article className="container">
            <div className="post card">
                <div className="card-content row">
                <img src="https://via.placeholder.com/150" alt="placeholder" className="col s3 m3 l3"/>
                    <h4 className="col s9 m9 l9">The EU-Mercosur Trade Deal Must Be Stopped</h4>
                    <p className="col s9 m9 l9 flow-text green-text text-accent-4">15th May 2020 (FINANCE & ECONOMY)</p>
                    <p className="col s9 m9 l9">
                        In June 2019, nearly two decades of negotiations between the EU and the Latin American Mercosur bloc concluded in the signing of a trade deal. 
                        Still to be ratified, the EU-Mercosur agreement has attracted strong criticism from diverse actors, from European farmers to environmentalists 
                        and human rights groups. With a focus on Brazil, the Mercosur bloc’s biggest member led by far-right president Jair Bolsonaro, 
                        Julia Lagoutte assesses the threats the deal poses to people and planet, and its prospects going forward.
                    </p>
                    <div className="right">
                        <button className="btn green accent-4">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Post;
