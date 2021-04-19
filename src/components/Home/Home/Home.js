import React from 'react';
import Header from '../Header/Header';
import ServiceCard from '../Header/Features/Features';
import Nav from '../Nav/Nav';
import Service from '../OurService/Service';
import Topbar from '../Topbar/Topbar';
import Features from '../Header/Features/Features';

const Home = () => {
    return (
        <div>
            <Topbar></Topbar>
            <Nav></Nav>
            <Header></Header>
           <Features></Features>
            <Service></Service>
        </div>
    );
};

export default Home;