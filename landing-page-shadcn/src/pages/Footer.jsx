import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="py-4 text-center text-sm text-gray-600 border-t border-gray-300 mx-auto w-full">
            <p className="flex justify-center items-center -ml-0 md:-ml-20">
                Copyright &copy; {year} by 
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://github.com/SehrishTanveer2002" 
                    className="ml-1 text-gray-800 hover:text-gray-700">
                    Sehrish.
                </a> 
            </p>
        </div>
    );
};

export default Footer;

