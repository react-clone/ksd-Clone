import React from "react";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import DiscoverServices from "../components/Home/DiscoverServices";
import HappyClients from "../components/Home/HappyClients";

const Home = () => {
    return (
        <div className="relative overflow-hidden">
            <Hero />
            <Services />
            <WhyChooseUs />
            <DiscoverServices />
            <HappyClients />

        </div>
    );
};

export default Home;
