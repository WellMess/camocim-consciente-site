
import React from 'react';

const supporters = [
    { name: 'MMA', description: 'Ministério do Meio Ambiente', icon: 'fa-landmark' },
    { name: 'IBGE', description: 'Instituto Brasileiro de Geografia e Estatística', icon: 'fa-chart-bar' },
    { name: 'ICMBio', description: 'Instituto Chico Mendes de Conservação', icon: 'fa-leaf' },
    { name: 'ANA', description: 'Agência Nacional de Águas', icon: 'fa-tint' },
    { name: 'SEMA/CE', description: 'Secretaria do Meio Ambiente do Ceará', icon: 'fa-shield-alt' },
    { name: 'CONAMA', description: 'Conselho Nacional do Meio Ambiente', icon: 'fa-gavel' },
    { name: 'CPRM', description: 'Serviço Geológico do Brasil', icon: 'fa-mountain' },
    { name: 'ONU', description: 'Organização das Nações Unidas', icon: 'fa-globe-americas' },
];

const Supporters: React.FC = () => {
    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-azul-marinho mb-6">
                        <i className="fas fa-building mr-3"></i>
                        Órgãos de Apoio
                    </h2>
                    <div className="w-24 h-1 bg-verde-sustentavel mx-auto mb-8"></div>
                    <p className="text-xl text-gray-700">Dados e informações baseados em fontes oficiais</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {supporters.map(supporter => (
                        <div key={supporter.name} className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
                            <i className={`fas ${supporter.icon} text-4xl text-verde-sustentavel mb-3`}></i>
                            <h4 className="font-bold text-azul-marinho mb-2">{supporter.name}</h4>
                            <p className="text-sm text-gray-600">{supporter.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Supporters;
