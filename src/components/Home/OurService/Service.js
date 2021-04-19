import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://peaceful-wildwood-58192.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data)
            })
    }, [])
    return (
        <section className='mt-5'>
            <div className="text-center">
                <h4 className="brand-text-primary">Our Service</h4>
                <h2>We Provide Top Class Services All time</h2>
            </div>
            <div className="container pt-5">
                <div className="row text-center justify-content-center">
                    {
                        services.map(service => <ServiceCard service={service}></ServiceCard>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Service;