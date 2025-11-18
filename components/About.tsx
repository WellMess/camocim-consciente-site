import React from 'react';

const About: React.FC = () => {
    return (
        <div className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16 text-gray-800 dark:text-gray-200">
                    <h2 className="text-4xl md:text-5xl font-bold text-azul-marinho mb-6">
                        <i className="fas fa-info-circle mr-3"></i>
                        Sobre o Projeto
                    </h2>
                    <div className="w-24 h-1 bg-verde-sustentavel mx-auto mb-8"></div>
                    <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed mb-6">
                        O projeto <strong>Camocim Consciente</strong> tem como objetivo aproximar a população da realidade ambiental do litoral cearense, promovendo educação, sustentabilidade e respeito aos ecossistemas.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed mb-6">
                        Cada placa educativa instalada em pontos estratégicos da cidade contém um QR Code que direciona o visitante a este site, onde poderá conhecer temas essenciais da preservação costeira e marinha.
                    </p>
                    <div className="bg-bege-areia dark:bg-gray-700 p-6 rounded-lg inline-block">
                        <p className="text-xl font-semibold text-verde-escuro">
                            <i className="fas fa-seedling mr-2"></i>
                            Educação ambiental é o primeiro passo para proteger o futuro
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl card-hover">
                        <div className="text-azul-marinho text-5xl mb-4">
                            <i className="fas fa-bullseye"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-azul-marinho dark:text-blue-300 mb-4">Missão</h3>
                        <p className="text-gray-700 dark:text-gray-400">
                            Promover o conhecimento ambiental e incentivar atitudes sustentáveis na comunidade camocinense.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl card-hover">
                        <div className="text-verde-sustentavel text-5xl mb-4">
                            <i className="fas fa-eye"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-verde-escuro dark:text-green-300 mb-4">Visão</h3>
                        <p className="text-gray-700 dark:text-gray-400">
                            Ser referência em projetos educativos de proteção costeira no litoral oeste do Ceará.
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl card-hover">
                        <div className="text-yellow-700 text-5xl mb-4">
                            <i className="fas fa-heart"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-yellow-800 dark:text-yellow-300 mb-4">Valores</h3>
                        <p className="text-gray-700 dark:text-gray-400">
                            Educação, Sustentabilidade, Participação e Amor à Natureza.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
