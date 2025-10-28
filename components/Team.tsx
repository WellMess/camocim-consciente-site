
import React from 'react';

const Team: React.FC = () => {
    
    const timelineItems = [
        { date: 'Setembro - Outubro 2025', description: 'Levantamento bibliográfico e leitura. Seleção de artigos, livros e outras informações relevantes.', status: 'completed' },
        { date: 'Outubro - Novembro 2025', description: 'Montagem das placas no CANVA. Produção de seis placas educativas.', status: 'completed' },
        { date: 'Novembro - Dezembro 2025', description: 'Montagem do site do projeto com informações técnicas e aprofundadas.', status: 'in-progress' },
        { date: 'Dezembro 2025 - Janeiro 2026', description: 'Revisão e ajustes nas informações das placas e site do projeto.', status: 'pending' },
        { date: 'Janeiro - Fevereiro 2026', description: 'Entrega do material ao órgão municipal ambiental de Camocim.', status: 'pending' },
        { date: 'Fevereiro - Março 2026', description: 'Produção do relatório final das atividades desenvolvidas.', status: 'pending' }
    ];

    const getStatusStyles = (status: string) => {
        switch (status) {
            case 'completed': return { bg: 'from-blue-50 to-blue-100', border: 'border-azul-marinho', icon: 'fa-check-circle text-verde-sustentavel', text: 'text-azul-marinho' };
            case 'in-progress': return { bg: 'from-purple-50 to-purple-100', border: 'border-purple-600', icon: 'fa-spinner fa-spin text-purple-600', text: 'text-purple-800' };
            case 'pending':
            default: return { bg: 'from-yellow-50 to-yellow-100', border: 'border-yellow-600', icon: 'fa-clock text-yellow-600', text: 'text-yellow-800' };
        }
    };
    
    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-azul-marinho mb-6">
                        <i className="fas fa-users mr-3"></i>
                        Equipe IFCE - Gestão Ambiental
                    </h2>
                    <div className="w-24 h-1 bg-verde-sustentavel mx-auto mb-8"></div>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Projeto desenvolvido pelos alunos do Instituto Federal do Ceará (IFCE), campus Camocim, sob orientação docente. Cada tema foi elaborado por um integrante da equipe, com base em dados oficiais e revisões ambientais.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold text-azul-marinho mb-8 text-center">
                        <i className="fas fa-calendar-alt mr-2"></i>
                        Cronograma do Projeto
                    </h3>
                    
                    <div className="space-y-4">
                        {timelineItems.map((item, index) => {
                            const styles = getStatusStyles(item.status);
                            return (
                                <div key={index} className={`bg-gradient-to-r ${styles.bg} p-6 rounded-lg border-l-4 ${styles.border}`}>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <i className={`fas ${styles.icon} text-2xl`}></i>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className={`font-bold ${styles.text} mb-2`}>{item.date}</h4>
                                            <p className="text-gray-700">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
