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

        const dropDown = document.querySelector('.dropdown-trigger');
        M.Dropdown.init(dropDown);
    }, [])

    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />

    return (
        <header>
            <div className="navbar-fixed">
                <nav className="nav-wrapper grey darken-4">
                    <div className="nav-container">
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
                                <a href="https://twitter.com/julialagoutte" className="tooltipped btn-floating btn-small green accent-4" data-tooltip="Twitter" target="_blank" rel="noreferrer noopener">
                                    <div className={styles.icon}>
                                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-trigger" href="#!" data-target="dropdownnav">
                                    Admin <i className="material-icons right">arrow_drop_down</i>
                                </a>
                            </li>
                        </ul>
                    </div> 
                </nav>
            </div>
            <ul className="dropdown-content grey darken-4" id="dropdownnav">
                {auth.isLoaded && links}
            </ul>
            <ul className="sidenav grey lighen-2" id="mobile-menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/articles">Articles</NavLink></li>
                <li><NavLink to="/interviews">Interviews</NavLink></li>
                <li><NavLink to="/podcasts">Podcasts</NavLink></li>
                <li>{auth.isLoaded && links}</li>
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
