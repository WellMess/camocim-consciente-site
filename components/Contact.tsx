
import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="py-20 bg-azul-marinho text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <i className="fas fa-envelope mr-3"></i>
                        Entre em Contato
                    </h2>
                    <div className="w-24 h-1 bg-verde-sustentavel mx-auto mb-8"></div>
                </div>
                
                <div className="max-w-3xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl card-hover">
                            <i className="fas fa-envelope text-5xl mb-4 text-verde-sustentavel"></i>
                            <h4 className="font-bold text-xl mb-2">Email</h4>
                            <p className="text-sm opacity-90">ifce.camocim@edu.br</p>
                        </div>
                        
                        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl card-hover">
                            <i className="fas fa-map-marker-alt text-5xl mb-4 text-verde-sustentavel"></i>
                            <h4 className="font-bold text-xl mb-2">Localização</h4>
                            <p className="text-sm opacity-90">Campus IFCE<br/>Camocim, CE</p>
                        </div>
                        
                        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl card-hover">
                            <i className="fas fa-hashtag text-5xl mb-4 text-verde-sustentavel"></i>
                            <h4 className="font-bold text-xl mb-2">Redes Sociais</h4>
                            <p className="text-sm opacity-90">@ifcecamocim<br/>#CamocimConsciente</p>
                        </div>
                    </div>
                    
                    <div className="mt-12 text-center">
                        <p className="text-xl mb-6">Tem dúvidas ou sugestões sobre o projeto?</p>
                        <a href="mailto:ifce.camocim@edu.br" className="inline-block bg-verde-sustentavel hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition transform hover:scale-105 shadow-lg">
                            <i className="fas fa-paper-plane mr-2"></i>
                            Enviar Mensagem
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
