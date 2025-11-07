import React from 'react';
import Header from "../components/UI/Header/Header";
import Navigation from "../components/UI/Navigation/Navigation";
import MainContent from "../components/UI/WebContentWrapper/MainContent";

function Home() {
    return (
        <MainContent>
            <Header className={''}>
                <Navigation></Navigation>
            </Header>
        </MainContent>
    );
}

export default Home;