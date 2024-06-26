// src/components/inc/Header.js
import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

const Header = () => {
    return (
        <header className='header'>
            <Navbar />
            <div className="header-banner">
                <Banner />
            </div>
            <h1>FlyStudyThrive navigates your journey to top colleges with a
98% success rate.
</h1>
        </header>
    );
};

export default Header;
