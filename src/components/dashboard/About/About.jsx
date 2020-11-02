import React, { useEffect } from 'react';
import M from 'materialize-css';

const About = () => {

    useEffect(() => {
        const tabs = document.querySelectorAll('.tabs');
        M.Tabs.init(tabs);
    }, []);

    return (
        <section className="container section" id="services">
            <div className="row">
                <div className="col s12 l4">
                    <h2 className="green-text text-accent-4">What I do...</h2>
                    <p>
                        I produce Green Wave the Green European Journal‘s podcast, which showcases the best of their articles in audio form.
                    </p>
                    <p>
                        I am also the co-founder and co-host of the Big Green Politics Podcast, alongside political commentator Seden Anlar. Find it on any podcast app or listen here.
                    </p>
                </div>
                <div className="col s12 l6 offset-l2">
                    <ul className="tabs">
                    <li className="tab col s6">
                        <a href="#writing" className="green-text text-accent-4">Writing</a>
                    </li>
                    <li className="tab col s6">
                        <a href="#podcasting" className="green-text text-accent-4">Podcasting</a>
                    </li>
                    </ul>
                    <div className="col s12" id="writing">
                    <p className="flow-text green-text text-accent-4">
                        WRITING, COPY-EDITING, PROOFREADING
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum error pariatur consequuntur voluptatibus ab ea, 
                        quod commodi vitae illo officia deleniti velit voluptas quibusdam similique non eaque odit? Ex, voluptas.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum error pariatur consequuntur voluptatibus ab ea, 
                        quod commodi vitae illo officia deleniti velit voluptas quibusdam similique non eaque odit? Ex, voluptas.
                    </p>
                    </div>
                    <div className="col s12" id="podcasting">
                    <p className="flow-text green-text text-accent-4">
                        PODCASTING
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum error pariatur consequuntur voluptatibus ab ea, 
                        quod commodi vitae illo officia deleniti velit voluptas quibusdam similique non eaque odit? Ex, voluptas.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum error pariatur consequuntur voluptatibus ab ea, 
                        quod commodi vitae illo officia deleniti velit voluptas quibusdam similique non eaque odit? Ex, voluptas.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
