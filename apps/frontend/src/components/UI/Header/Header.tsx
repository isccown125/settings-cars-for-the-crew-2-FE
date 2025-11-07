import React from 'react';

interface HeaderProps{
    className: string,
    children?: React.ReactNode,
}

function Header(props:HeaderProps) {
    return (
        <header className={props.className}>
            {props.children}
        </header>
    );
}

export default Header;