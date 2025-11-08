import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { href: '#inicio', label: 'Início' },
        { href: '#sobre', label: 'Sobre' },
        { href: '#temas', label: 'Temas Ambientais' },
        { href: '#qrcode', label: 'QR Code' },
        { href: '#equipe', label: 'Equipe' },
        { href: '#leis', label: 'Leis' },
        { href: '#contato', label: 'Contato' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const closeMenu = () => setIsMenuOpen(false);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (!href) return;
        
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const navbarHeight = document.getElementById('navbar')?.offsetHeight ?? 80;
            
            let top = 0;
            if (targetId !== 'inicio') {
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                top = elementPosition - navbarHeight;
            }

            window.scrollTo({ top, behavior: 'smooth' });
            
            if(isMenuOpen) {
                closeMenu();
            }
        }
    };

    return (
        <nav 
            id="navbar" 
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled 
                ? 'bg-[rgba(27,73,101,0.98)] shadow-md backdrop-blur-sm' 
                : 'bg-[rgba(27,73,101,0.95)]'
            }`}
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <a href="#inicio" onClick={handleLinkClick} className="flex items-center space-x-3 cursor-pointer">
                        <i className="fas fa-leaf text-3xl text-white"></i>
                        <div>
                            <h1 className="text-white font-bold text-xl">Camocim Consciente</h1>
                            <p className="text-white text-xs opacity-80">IFCE Campus Camocim</p>
                        </div>
                    </a>
                    
                    <div className="hidden md:flex space-x-6 items-center">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} onClick={handleLinkClick} className="text-white hover:text-green-300 transition cursor-pointer">{link.label}</a>
                        ))}
                    </div>
                    
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white text-2xl">
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
                
                <div className={`transition-all duration-300 ease-in-out md:hidden overflow-hidden ${isMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                    <div className="flex flex-col space-y-3 pb-4">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} onClick={handleLinkClick} className="text-white hover:text-green-300 transition py-2 cursor-pointer">{link.label}</a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
