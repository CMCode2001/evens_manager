import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FirstSection from '../components/FirstSection';
import SecondeSection from '../components/SecondeSection';


const Acceuil = () => {
    return ( 
        <div>
            <Navbar />
            <FirstSection />     
            <SecondeSection />      
            <Footer />
       
        </div>
    );
}
export default Acceuil;