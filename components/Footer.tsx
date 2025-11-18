import React from 'react';

const Footer: React.FC = () => {
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
        }
    };

    const quickLinks = [
        { href: '#inicio', label: 'Início' },
        { href: '#sobre', label: 'Sobre o Projeto' },
        { href: '#temas', label: 'Temas Ambientais' },
        { href: '#equipe', label: 'Equipe IFCE' },
        { href: '#leis', label: 'Leis Ambientais' },
    ];

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <i className="fas fa-leaf text-3xl text-verde-sustentavel"></i>
                            <div>
                                <h3 className="font-bold text-xl">Camocim Consciente</h3>
                                <p className="text-sm opacity-80">IFCE Campus Camocim</p>
                            </div>
                        </div>
                        <p className="text-sm opacity-80 leading-relaxed">
                            Promovendo a Cultura Oceânica através da educação ambiental e preservação dos ecossistemas costeiros e marinhos.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
                        <ul className="space-y-2 text-sm">
                            {quickLinks.map(link => (
                                <li key={link.href}>
                                    <a href={link.href} onClick={handleLinkClick} className="hover:text-verde-sustentavel transition cursor-pointer">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-bold text-lg mb-4">Dados do Projeto</h4>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li><i className="fas fa-calendar mr-2"></i>Início: 24/09/2025</li>
                            <li><i className="fas fa-calendar-check mr-2"></i>Término: 24/03/2026</li>
                            <li><i className="fas fa-users mr-2"></i>Beneficiados: 30-100 pessoas</li>
                            <li><i className="fas fa-map-marker-alt mr-2"></i>Local: Camocim-CE</li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-gray-700 pt-8 text-center">
                    <p className="text-sm opacity-80 mb-4">
                        © 2025 Equipe IFCE - Gestão Ambiental | Projeto Educativo sem fins lucrativos
                    </p>
                    <p className="text-xs opacity-60">
                        Dados: IBGE, ICMBio, MMA, CONAMA, SEMA/CE, ANA, CPRM, ONU
                    </p>
                    <div className="mt-4">
                        <p className="text-sm font-semibold text-verde-sustentavel">
                            <i className="fas fa-leaf mr-2"></i>
                            Preservar é educar. Deixe o mar como você encontrou.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
