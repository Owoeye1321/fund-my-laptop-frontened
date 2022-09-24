import React from 'react';
import { Link } from 'react-router-dom';

function ContactNavigation() {
    return (
        <>
            <ul >
                <li >
                    <a href="/" style={{color:'white'}}>
                        Home 
                    </a>
                </li>
                <li>
                    <Link to="/service" style={{color:'white'}}>Sponsor Repairs</Link>
                </li>
                <li>
                    <Link to="/contact" style={{color:'white'}}>Contact</Link>
                </li>
            </ul>
        </>
    );
}

export default ContactNavigation;
