'use client'

import "../style/global.css";
import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main'; 
import Footer from '../components/Footer';

const Page: React.FC = () => {
    return (
        <>
            <Header />
            <Main />
            <hr></hr>
            <Footer />
        </>
    );
};

export default Page;