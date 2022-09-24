import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/about-thumb-5.png';

function FooterHomeEight() {
    return (
        <>
            <section className="appie-footer-area appie-footer-about-area appie-footer-8-area">
                <div className="container">
                <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about-widget">
                <div className="logo">
                  <a href="#">
                  <img src={logo} alt="" style = {{width:'40px', height:'40px'}}/>
                                    <strong className='mx-3' > Laptop Raise</strong>
                              </a>
                </div>
                <p>
                Laptop Raise is the best platform for Repair Sponsorship
                </p>
               
                <div className="social mt-30">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-navigation">
                <h4 className="title">Company</h4>
                <ul>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/Service">Service</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                  <Link to="/view_available_hostels">
                  Get Started
                </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget-info">
                <h4 className="title">Get In Touch</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fal fa-envelope" /> support@c-rentals.com
                    </a>
                  </li>
                  <li>
                  <p>
                                        <i className="fal fa-phone"></i>
                                        <a href='tel:+2349153464158'>(+234) 915 346 4158</a>
                                        </p>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fal fa-map-marker-alt" />
                     Kwara State University, Malete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-copyright d-flex align-items-center justify-content-center pt-35">
                <div className="copyright-text">
                  <p>Copyright © 2021 <a href="https://mainstack.me/cyberxurde" style={{color:"black"}}>The Brain box</a>. All rights reserved.</p>
                  
                </div>
              </div>
            </div>
          </div>
                </div>
            </section>
        </>
    );
}

export default FooterHomeEight;
