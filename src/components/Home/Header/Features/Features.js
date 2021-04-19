import React from 'react';
import plumber from '../../../../Images/Icons/plumber.svg'
import service from '../../../../Images/Icons/24-hours.svg'
import delivery from '../../../../Images/Icons/delivery.svg'
const Features = () => {
    return (
        <div style={{marginTop:'-200px'}} className="serviceCard">
            <div className='container d-flex justify-content-center'>
                <div className="row w-75 serviceCards text-white">
                    <div className="col-md-4">
                        <div className="s-cards d-flex justify-content-between align-items-center brand-background-primary p-3">
                            <div>
                                <img className="mr-3" style={{ height: '50px' }} src={plumber} alt="" />
                            </div>
                            <div>
                                <h6>Expert Services</h6>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="s-cards d-flex justify-content-between align-items-center brand-background-secondary p-3">
                            <div>
                                <img className="mr-3" style={{ height: '50px' }} src={service} alt="" />
                            </div>
                            <div>
                                <h6>Contact Support</h6>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="s-cards d-flex justify-content-between align-items-center brand-background-primary p-3">
                            <div>
                                <img className="mr-3" style={{ height: '50px' }} src={delivery} alt="" />
                            </div>
                            <div>
                                <h6>Service Anywhere</h6>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Features;