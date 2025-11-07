import React from 'react';
import {Link} from "react-router-dom";


interface NavigationProps {
    className: string,
    href: string,
    children: React.ReactNode,
}

function NavigationItem(props:NavigationProps) {

    return (
        <>
            <li className={props.className}>
                <Link to={props.href}>
                    {props.children}
                </Link>
            </li>
        </>
    );
}

export default NavigationItem;