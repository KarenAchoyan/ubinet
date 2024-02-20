import React from 'react';
import App from "../../components/layouts/app";
import Banner from "../../components/banner/banner";
import About from "../../components/about/about";
import Contactus from "../../components/Contactus/contactus";

const Index = () => {
    return (
        <div>
            <App>
                <Banner/>
                <About/>
                <Contactus/>
            </App>
        </div>
    );
};

export default Index;