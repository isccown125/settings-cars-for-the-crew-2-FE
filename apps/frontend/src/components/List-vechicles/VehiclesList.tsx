import React from 'react';
import Header from "../UI/Header/Header";
import Navigation from "../UI/Navigation/Navigation";

function VehiclesList() {
    return (
        <section className='all-vehicles'>
            <Header className={''}>
                <Navigation></Navigation>
            </Header>
        </section>
    );
}

export default VehiclesList;