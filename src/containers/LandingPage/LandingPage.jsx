import React from 'react';

// containers & components
import Profile from '../../components/Profile/Profile';
import LatestContent from '../LatestContent/LatestContent';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';

// images
import sunflower from '../../assets/images/sunflower-para.jpg';
import river from '../../assets/images/river-para.jpg';

const LandingPage = () => {
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
