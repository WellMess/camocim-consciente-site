
import React, { useState, useEffect } from 'react';

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button 
            id="back-to-top" 
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 bg-verde-sustentavel hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}
        >
            <i className="fas fa-arrow-up text-xl"></i>
        </button>
    );
};

export default BackToTopButton;
