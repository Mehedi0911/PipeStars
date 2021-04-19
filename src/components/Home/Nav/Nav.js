import React, { useState } from 'react';
import './Nav.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Nav = () => {

    return (

        <div className="container mt-3 w-75 nav-container">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h3 className="brand-text-primary">PIPE<span className="brand-span-secondary">STARs</span></h3>
                </div>
                <div className="d-flex">
                   <Link to="/"> <p className="pr-3 brand-text-primary">Home</p></Link>
                   <Link to="/services"> <p className="pr-3 brand-text-primary">Service</p></Link>
                   <Link to="/about"> <p className="pr-3 brand-text-primary">About</p></Link>
                   <Link to="/blog"> <p className="pr-3 brand-text-primary">Blog</p></Link>
                   <Link to="/controls"> <p className="pr-3 brand-text-primary">Admin</p></Link>
                   <Link to="/contact"> <p className="pr-3 brand-text-primary">Contact</p></Link>
                    
                </div>
            </div>

        </div>

    );
};

export default Nav;