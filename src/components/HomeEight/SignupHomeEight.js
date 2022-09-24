import React from 'react';
import signupThumb from '../../assets/images/signup-thumb.png';

function SponserHomeEight({ className }) {
    return (
        <>
           <section className="appie-about-8-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-signup-box">
                                <h3 className="title">Get Started.</h3>
                                <form action="#">
                                    <div className="input-box">
                                        <input type="text" placeholder="Username" />
                                    </div>
                                    <div className="input-box">
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div className="input-box">
                                        <input type="password" placeholder="Password" />
                                    </div>
                                    <div className="input-box">
                                        <button type="submit">Sign Up</button>
                                    </div>
                                    <div className="appie_checkbox_common checkbox_style2">
                                        <div>
                                            <input
                                                type="checkbox"
                                                name="checkbox2"
                                                id="checkbox4"
                                            />
                                            <label htmlFor="checkbox4">
                                                <span></span>By signing up you agree to our
                                                <a href="#">Terms & Conditions.</a>
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SponserHomeEight;
