import React from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="page-footer grey darken-3">
            <div className="container">
                <div className="row">
                    <div className="col s12 l6">
                        <h5>Some other stuff...</h5>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam adipisci voluptatum accusamus 
                            rem quidem sequi corporis sapiente harum accusantium voluptas,
                            eos, voluptatibus dolorum, commodi quae. Architecto corporis enim inventore dolorem!
                        </p>
                    </div>
                    <div className="col s12 l4 offset-l2 connect">
                        <h5>Connect</h5>
                        <a href="#" className="grey-text text-lighten-3"><FontAwesomeIcon icon={['fab', 'facebook-square']} className={styles.connecticon} /></a>
                        <a href="#" className="grey-text text-lighten-3"><FontAwesomeIcon icon={['fab', 'twitter']} className={styles.connecticon} /></a>
                        <a href="#" className="grey-text text-lighten-3"><FontAwesomeIcon icon={['fab', 'linkedin']} className={styles.connecticon} /></a>
                        <a href="#" className="grey-text text-lighten-3"><FontAwesomeIcon icon={['fab', 'instagram']} className={styles.connecticon} /></a>
                    </div>
                </div>
                </div>
                <div className="footer-copyright grey darken-4">
                <div className="container center">
                    &copy; 2020 Julia Lagoutte
                </div>
            </div>
        </footer>
    )
}

export default Footer;
