import React from 'react';
import NavigationItem from "./NavigationItem";

function Navigation() {
    return (
        <nav className='navigation'>
            <div className='navigation-content'>
                <ul className='navigation-container'>
                    <NavigationItem className='navigation-container__item' href={'/'}>Home</NavigationItem>
                    <NavigationItem className='navigation-container__item' href={'/vechicles'}>List Vechicle</NavigationItem>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;