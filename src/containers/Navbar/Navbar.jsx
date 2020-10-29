import React from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// components
import Link from '../../components/Link/Link';

// styles
import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <header>
            <div className="navbar-fixed">
                <nav className="nav-wrapper grey darken-4">
                    <div className="container">
                        <a href="#" className="brand-logo">Julia Lagoutte</a>
                        <a href="#" className="sidenav-trigger" data-target="mobile-menu">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/articles">Articles</NavLink></li>
                            <li><NavLink to="/interviews">Interviews</NavLink></li>
                            <li><NavLink to="/podcasts">Podcasts</NavLink></li>
                            <li>
                                <a href="#" className="tooltipped btn-floating btn-small green accent-4">
                                    <div className={styles.icon}>   
                                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tooltipped btn-floating btn-small green accent-4">
                                    <div className={styles.icon}>
                                        <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="tooltipped btn-floating btn-small green accent-4">
                                    <div className={styles.icon}>
                                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                                    </div>
                                </a>
                            </li>
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

export default Navbar;
