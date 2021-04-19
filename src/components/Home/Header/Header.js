import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <section className="header-container pt-5">
            <div className='container-fluid text-center p-5 d-flex justify-content-center'>
                <div className="text-white w-50">
                    <h5>Best Quality Plumber Works</h5>
                    <hr style={{ border: ".5px solid #f4BC1C", width: '200px' }} />
                    <h2 className="brand-text-primary">Work in Your Comfort</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores velit aperiam nesciunt delectus itaque consectetur placeat iste iusto veniam voluptates dolor.</p>
                    <button className="brand-btn-primary">Learn More</button>
                    <button className="brand-btn-ternary">Book Now</button>
                </div>

            </div>
            
        </section>
    );
};

export default Header;