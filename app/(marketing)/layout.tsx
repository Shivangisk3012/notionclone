import React from 'react';
import {Navbar} from './_component/Navbar'; // Import Navbar component if it's in a separate file

const MarketingLayout = ({ 
    children
 }: {
    children: React.ReactNode;
 }) => {
    return (
        <div className="h-full dark:bg-[#1f1f1f]">
            <Navbar />
            <main className="h-full pt-10">
                {children}
            </main>
        </div>
    );
};

export default MarketingLayout;
