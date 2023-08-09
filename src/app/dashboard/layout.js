import React from 'react';

const DashBoardLayout = ({children}) => {
    return (
        <div className=' flex container mx-auto'> 
           <h1>sidebar</h1> 
           {children}
        </div>
    );
};

export default DashBoardLayout;
