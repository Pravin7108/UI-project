/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Header from '../components/Header'; 
import Events from '../components/Events';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <Events/>
            <Footer/>
        </>
    )
}