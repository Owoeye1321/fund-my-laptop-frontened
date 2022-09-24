import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <ul>
                <li>
                    <a href="/">
                        Home 
                    </a>
                </li>
                <li>
                    <Link to="/service">Sponsor Repairs</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </>
    );
}

export default Navigation;
