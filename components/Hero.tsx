import React from 'react';

const Hero: React.FC = () => {
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (!href) return;
        
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const navbarHeight = document.getElementById('navbar')?.offsetHeight ?? 80;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const top = elementPosition - navbarHeight;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80" 
                    alt="Praia de Camocim" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 hero-gradient"></div>
            </div>
            
            <div className="container mx-auto px-4 z-10 text-center text-white">
                <div className="max-w-4xl mx-auto">
                    <i className="fas fa-leaf text-6xl mb-6 animate-pulse"></i>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Pequenas ações,<br/>grandes mudanças
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
                        Um projeto de Educação Ambiental do IFCE voltado à conscientização sobre<br className="hidden md:block" /> 
                        os ecossistemas de Camocim e a importância da preservação dos ambientes costeiros
                    </p>
                    <a href="#temas" onClick={handleLinkClick} className="inline-block bg-verde-sustentavel hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition transform hover:scale-105 shadow-lg cursor-pointer">
                        <i className="fas fa-compass mr-2"></i>
                        Conheça os Temas Ambientais
                    </a>
                </div>
            </div>
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <a href="#sobre" onClick={handleLinkClick} aria-label="Scroll down" className="cursor-pointer">
                    <i className="fas fa-chevron-down text-white text-3xl"></i>
                </a>
            </div>
        </section>
    );
};

export default Hero;
