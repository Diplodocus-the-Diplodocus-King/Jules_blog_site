import React from 'react';

// styles
import styles from './Contact.module.scss';

const Contact = () => {
    return (
        <section className="section container scrollspy" id="contact">
            <div className="row">
                <div className="col s12 l5">
                    <h2 className="green-text text-accent-4">Get In Touch</h2>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam adipisci voluptatum accusamus 
                    rem quidem sequi corporis sapiente harum accusantium voluptas,
                    eos, voluptatibus dolorum, commodi quae. Architecto corporis enim inventore dolorem!
                    </p>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam adipisci voluptatum accusamus 
                    rem quidem sequi corporis sapiente harum accusantium voluptas,
                    eos, voluptatibus dolorum, commodi quae. Architecto corporis enim inventore dolorem!
                    </p>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam adipisci voluptatum accusamus 
                    rem quidem sequi corporis sapiente harum accusantium voluptas,
                    eos, voluptatibus dolorum, commodi quae. Architecto corporis enim inventore dolorem!
                    </p>
                </div>
                <div className="col s12 l5 offset-l2">
                    <form action="">
                    <div className="input-field">
                        <i className="material-icons prefix green-text text-accent-4">email</i>
                        <input type="email" id="email" className={styles.inputfield} required/>
                        <label for="email">Your Email</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix green-text text-accent-4">message</i>
                        <textarea id="message" className="materialize-textarea" required></textarea>
                        <label for="message">Your Message</label>
                    </div>
                    <div className="input-field">
                        <input type="text" id="date" className="datepicker"/>
                        <label for="date">Choose a date you need me for...</label>
                    </div>
                    <div className="input-field">
                        <p>Services Required...</p>
                        <p>
                            <label>
                                <input type="checkbox"/>
                                <span>Writing</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox"/>
                                <span>Editing</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox"/>
                                <span>Podcasting</span>
                            </label>
                        </p>
                    </div>
                    <div className="input-field center">
                        <button className="btn green accent-4 waves-effect waves-light">Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;
