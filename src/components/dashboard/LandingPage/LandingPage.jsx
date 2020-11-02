import React, { useEffect } from 'react';
import M from 'materialize-css';

// containers & components
import Profile from '../Profile/Profile';
import LatestContent from '../LatestContent/LatestContent';
import About from '../About/About';
import Contact from '../Contact/Contact';

// images
import sunflower from '../../../assets/images/sunflower-para.jpg';
import river from '../../../assets/images/river-para.jpg';

const LandingPage = () => {

    useEffect(() => {
        const parallaxes = document.querySelectorAll('.parallax');
        M.Parallax.init(parallaxes);
    }, []);


    return (
        <div className="landing-page">
            <Profile />
            <LatestContent />
            <div className="parallax-container">
                <div className="parallax">
                    <img src={sunflower} alt="" className="responsive-img"/>
                </div>
            </div>
            <About />
            <div className="parallax-container">
                <div className="parallax">
                <img src={river} alt="" className="responsive-img"/>
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default LandingPage;
