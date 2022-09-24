import React from 'react';
import hero from '../../assets/images/about-thumb-5.png';
import shapeOne from '../../assets/images/shape/1.png';
import shapeThree from '../../assets/images/shape/3.png';

function HeroHomeEight() {
    return (
        <>
            <section className="appie-hero-area appie-hero-8-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="appie-hero-content appie-hero-content-8">
                                <h1 className="appie-title">Raise Fund For<br></br> Gadget Repairs</h1>
                                <p>
                                    This Platform enhances sponsorship for gadget fixing <br></br>
                                    all over the state in Nigeria
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="appie-hero-thumb-6">
                                <div
                                    className="thumb text-center wow animated fadeInUp"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="600ms"
                                >
                                    <img src={hero} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-8-shape-1">
                    <img src={shapeThree} alt="" />
                </div>
                {/* <div className="home-8-shape-2">
                    <img src={shapeFour} alt="" />
                </div> */}
                <div className="home-8-shape-3">
                    <img src={shapeOne} alt="" />
                </div>
                {/* <div className="home-8-shape-4">
                    <img src={shapeTwo} alt="" />
                </div> */}
            </section>
        </>
    );
}

export default HeroHomeEight;
