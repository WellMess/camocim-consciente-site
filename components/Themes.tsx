
import React from 'react';

interface ThemesProps {
    onThemeSelect: (themeId: string) => void;
}

const themeCards = [
    { id: 'tema1', icon: 'fa-trash-alt', title: 'Impactos dos Resíduos', image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=600&q=80', description: 'O lixo que você descarta nunca desaparece — ele apenas muda de lugar.' },
    { id: 'tema2', icon: 'fa-mountain', title: 'Preservação das Restingas', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', description: 'Sem as restingas, as dunas não têm raízes e o litoral perde sua proteção natural.' },
    { id: 'tema3', icon: 'fa-water', title: 'Estuários e Manguezais', image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&q=80', description: 'Os manguezais são os berçários da vida marinha.' },
    { id: 'tema4', icon: 'fa-spider', title: 'Caranguejo-Uçá', image: 'https://images.unsplash.com/photo-1559666126-84f389727b9a?w=600&q=80', description: 'O Uçá é mais que um caranguejo — é um símbolo da cultura do mangue.' },
    { id: 'tema5', icon: 'fa-gem', title: 'Proteção dos Eolianitos', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', description: 'Os ventos do passado moldaram as rochas do presente.' },
    { id: 'tema6', icon: 'fa-fish', title: 'Conchas e Animais', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', description: 'O que é lembrança para uns, é abrigo para outros.' },
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
                                <p className="text-gray-600 mb-4">{card.description}</p>
                                <button className="text-verde-sustentavel font-semibold hover:underline">
                                    Ler mais <i className="fas fa-arrow-right ml-2"></i>
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
