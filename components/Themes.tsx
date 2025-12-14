
import React from 'react';

interface ThemesProps {
    onThemeSelect: (themeId: string) => void;
}

const themeCards = [
    { id: 'tema7', icon: 'fa-ban', title: 'NÃO COMPRE PESCADOS PROIBIDOS', image: '/images/novo_tema_nao_compre_pescados_proibidos.png', description: 'Imagem do tema: NÃO COMPRE PESCADOS PROIBIDOS' },
    { id: 'tema1', icon: 'fa-trash-alt', title: 'Impactos dos Resíduos', image: '/images/impactos_residuos_ambiente.png', description: 'Imagem do tema: Impactos dos Resíduos no Ambiente' },
    { id: 'tema2', icon: 'fa-mountain', title: 'Preservação das Restingas', image: '/images/preservacao_restingas.png', description: 'Imagem do tema: Preservação das Restingas' },
    { id: 'tema3', icon: 'fa-water', title: 'Estuários e Manguezais', image: '/images/preservacao_estuarios_manguezais.png', description: 'Imagem do tema: Preservação dos Estuários e Manguezais' },
    { id: 'tema4', icon: 'fa-spider', title: 'Caranguejo-Uçá', image: '/images/conservacao_caranguejo_uca.png', description: 'Imagem do tema: Conservação do Caranguejo-Uçá' },
    { id: 'tema5', icon: 'fa-gem', title: 'Proteção dos Eolianitos', image: '/images/protecao_eolianitos.png', description: 'Imagem do tema: Proteção dos Eolianitos' },
    { id: 'tema6', icon: 'fa-fish', title: 'Conchas e Animais', image: '/images/combate_levar_conchas_animais.png', description: 'Imagem do tema: Combate ao Hábito de Levar Conchas e Animais' },
];

const Themes: React.FC<ThemesProps> = ({ onThemeSelect }) => {
    return (
        <div className="py-20 bg-gradient-to-b from-green-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-azul-marinho mb-6">
                        <i className="fas fa-book-open mr-3"></i>
                        Temas Ambientais
                    </h2>
                    <div className="w-24 h-1 bg-verde-sustentavel mx-auto mb-8"></div>
                    <p className="text-xl text-gray-700">Clique em cada tema para saber mais!</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {themeCards.map(card => (
                        <div key={card.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer" onClick={() => onThemeSelect(card.id)}>
                            <div className="relative h-48">
                                <img src={card.image} alt={card.title} className="w-full h-full object-cover" loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <i className={`fas ${card.icon} text-3xl mb-2`}></i>
                                    <h3 className="text-xl font-bold">{card.title}</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <button className="text-verde-sustentavel font-semibold hover:underline">
                                    Ver Imagem <i className="fas fa-arrow-right ml-2"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Themes;
