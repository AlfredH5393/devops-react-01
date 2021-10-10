import React from 'react';
import './css/style.css';
import './css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from './components/NavBar';
import Header from './components/Header';
import Portafolio from './components/Portafolio';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CopyRight from './components/CopyRight';

const  MyLandingPage = () => {
    return (
        <> 
            <NavBar />
            <Header />
            <Portafolio />
            <AboutMe />
            <Contact />
            <Footer />
            <CopyRight />
        </>
    )
}

export default MyLandingPage;