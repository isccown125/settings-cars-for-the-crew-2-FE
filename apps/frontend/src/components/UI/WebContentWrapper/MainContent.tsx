import React from 'react';

interface MainContentProps{
    children: React.ReactNode,
}

function MainContent(props:MainContentProps) {
    return (
        <main>
            <div className='main-content'>
                {props.children}
            </div>
        </main>
    );
}

export default MainContent;