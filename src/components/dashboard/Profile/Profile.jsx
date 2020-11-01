import React from 'react';

const Profile = () => {
    return (
        <section className="container section scrollspy" id="about">
            <div className="row">
                <div className="col s12 l4">
                    <img src="https://via.placeholder.com/250" alt="" className="responsive-img circle"/>
                </div>
                <div className="col s12 l8">
                    <h2 className="green-text text-accent-4">Hello.</h2>
                    <p className="flow-text">
                        I am a journalist, editor, podcaster – with a focus on European and global affairs, women’s rights, indigenous rights, and Green politics.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Profile;
