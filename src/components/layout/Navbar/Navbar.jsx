import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import M from 'materialize-css';

// components
import MediaLink from '../MediaLink/MediaLink';

// styles
import styles from './Navbar.module.scss';
import SignedInLinks from '../SignedInLinks/SignedInLinks';
import SignedOutLinks from '../SignedOutLinks/SignedOutLinks';

// redux
import { connect } from 'react-redux';

const Navbar = ({auth}) => {

    useEffect(() => {
        const tooltips = document.querySelectorAll('.tooltipped');
        M.Tooltip.init(tooltips);

        const sideNav = document.querySelector('.sidenav');
        M.Sidenav.init(sideNav);
    }, [])

    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />

    return (
        <header>
            <div className="navbar-fixed">
                <nav className="nav-wrapper grey darken-4">
                    <div className="container">
                        <Link to="/" className="brand-logo">Julia Lagoutte</Link>
                        <a href="#" className="sidenav-trigger" data-target="mobile-menu">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/articles">Articles</NavLink></li>
                            <li><NavLink to="/interviews">Interviews</NavLink></li>
                            <li><NavLink to="/podcasts">Podcasts</NavLink></li>
                            <li>
                                <a href="#" className="tooltipped btn-floating btn-small green accent-4" data-tooltip="Instagram">
                                    <div className={styles.icon}>   
                                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tooltipped btn-floating btn-small green accent-4" data-tooltip="Facebook">
                                    <div className={styles.icon}>
                                        <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tooltipped btn-floating btn-small green accent-4" data-tooltip="Twitter">
                                    <div className={styles.icon}>
                                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                                    </div>
                                </a>
                            </li>
                            {auth.isLoaded && links}
                        </ul>
                    </div> 
                </nav>
            </div>
            <ul className="sidenav grey lighen-2" id="mobile-menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/articles">Articles</NavLink></li>
                <li><NavLink to="/interviews">Interviews</NavLink></li>
                <li><NavLink to="/podcasts">Podcasts</NavLink></li>
            </ul>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);
