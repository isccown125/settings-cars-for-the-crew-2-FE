import React from 'react';
import Header from "../components/UI/Header/Header";
import Navigation from "../components/UI/Navigation/Navigation";
import MainContent from "../components/UI/WebContentWrapper/MainContent";
import Footer from "../components/UI/Footer/Footer";
import Banner from "../components/UI/Banner/Banner";

function Home() {
    return (
        <>
            <Header>
                <Navigation />
                <Banner />
            </Header>
            <MainContent>

            </MainContent>
            <Footer>
            </Footer>
        </>

    );
}

export default Home;