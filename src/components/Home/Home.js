import React from 'react';
import Appointment from './Appointment/Appointment';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import InfoCard from './InfoCard/InfoCard';
import Navigation from './Navigation/Navigation';
import OurBlog from './OurBlog/OurBlog';
import OurDoctor from './OurDoctor/OurDoctor';
import OurService from './OurService/OurService';
import Testimonial from './Testimonial/Testimonial';
import YourTerms from './YourTerms/YourTerms';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner/>
            <InfoCard/>
            <OurService/>
            <YourTerms/>
            <Appointment/>
            <Testimonial/>
            <OurBlog/>
            <OurDoctor/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;