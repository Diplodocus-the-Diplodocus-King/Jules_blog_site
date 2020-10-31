import React from 'react';

// images
import bgpp from '../../assets/images/bgpp-logo-dark-2.jpg';
import greenWave from '../../assets/images/green-wave-podcast-logo.jpg';
import greenSpace from '../../assets/images/green-space-logo.jpg';

const PodcastPage = () => {
    return (
        <section className="container section scrollspy" id="photos">
            <div className="row">
                <div className="col s12 l4 push-l7 offset-l1">
                    <img src={bgpp} alt="not found" className="responsive-img"/>
                </div>
                <div className="col s12 l6 pull-l5 offset-l1">
                    <h2 className="green-text text-accent-4">Big Green Politics Podcast</h2>
                    <p>
                        Seden Anlar and Julia Lagoutte bring you their environmentalist & feminist angle on global politics news, and interviews with Green thinkers, 
                        politicians & activists. 
                    </p>
                    <p>
                        Available on all podcast apps including Itunes, Spotify, Google and on Souncloud.
                    </p>                
                    <p>
                        Come join the debate! Follow us on Twitter and like us on Facebook.
                    </p>
                </div>
                </div>
                <div className="row">
                    <div className="col s12 l4">
                        <img src={greenWave} alt="" className="responsive-img"/>
                    </div>
                    <div className="col s12 l6 right-align">
                        <h2 className="green-text text-accent-4">Green Wave</h2>
                        <p>
                            This is the Green European Journal’s podcast. The Green European Journal is the European venue for Green ideas and analysis – 
                            showcasing the best of its articles in audio form.
                        </p>
                        <p>
                            Available on all podcast apps including Itunes, Spotify, and Google.
                        </p>
                        <p>
                            This podcast is produced in collaboration with Seden Anlar.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l4 push-l7 offset-l1">
                        <img src={greenSpace} alt="" className="responsive-img"/>
                    </div>
                <div className="col s12 l6 pull-l5 offset-l1">
                    <h2 className="green-text text-accent-4">Green Space</h2>
                    <p>
                        A Podcast about Green ideas. In the run up to the general election, we’re getting to grips with the Green Party of England and Wales’ manifesto – 
                        ‘If not now, when?’ – with the people who put it together.
                    </p>
                    <p>
                        This is a space where we can explore the philosophy behind the growing political ecology movement. 
                        Green Space is produced by Seden Anlar & Julia Lagoutte – in collaboration with the Green Party of England and Wales.
                    </p>
                    <p>
                        Available on all podcast apps including Itunes, Spotify, and Google. Listen directly here.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default PodcastPage;
