
import React from 'react';

const laws = [
    { title: 'Lei nº 9.605/1998', description: 'Dispõe sobre as sanções penais e administrativas derivadas de condutas lesivas ao meio ambiente (Lei de Crimes Ambientais).', style: 'blue' },
    { title: 'Lei nº 12.651/2012', description: 'Código Florestal Brasileiro - Estabelece normas gerais sobre a proteção da vegetação, áreas de preservação permanente e reserva legal.', style: 'green' },
    { title: 'Resolução CONAMA nº 303/2002', description: 'Dispõe sobre parâmetros, definições e limites de Áreas de Preservação Permanente, incluindo restingas e manguezais.', style: 'yellow' },
    { title: 'Lei nº 9.985/2000', description: 'Institui o Sistema Nacional de Unidades de Conservação da Natureza (SNUC) e estabelece critérios para criação e gestão de unidades de conservação.', style: 'purple' },
    { title: 'Lei nº 11.959/2009', description: 'Dispõe sobre a Política Nacional de Desenvolvimento Sustentável da Aquicultura e da Pesca, incluindo o período de defeso para proteção das espécies.', style: 'red' },
];

const Laws: React.FC = () => {

    const getStyle = (style: string) => {
        switch (style) {
            case 'green': return { bg: 'from-green-50 to-green-100', border: 'border-verde-sustentavel', text: 'text-verde-escuro' };
            case 'yellow': return { bg: 'from-yellow-50 to-yellow-100', border: 'border-yellow-600', text: 'text-yellow-800' };
            case 'purple': return { bg: 'from-purple-50 to-purple-100', border: 'border-purple-600', text: 'text-purple-800' };
            case 'red': return { bg: 'from-red-50 to-red-100', border: 'border-red-600', text: 'text-red-800' };
            case 'blue':
            default: return { bg: 'from-blue-50 to-blue-100', border: 'border-azul-marinho', text: 'text-azul-marinho' };
        }
    };

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-azul-marinho mb-6">
                        <i className="fas fa-balance-scale mr-3"></i>
                        Leis e Normativas Relacionadas
                    </h2>
                    <div className="w-24 h-1 bg-verde-sustentavel mx-auto mb-8"></div>
                </div>
                
                <div className="max-w-4xl mx-auto space-y-6">
                    {laws.map((law, index) => {
                        const styles = getStyle(law.style);
                        return (
                            <div key={index} className={`bg-gradient-to-r ${styles.bg} p-6 rounded-lg border-l-4 ${styles.border} card-hover`}>
                                <h4 className={`font-bold ${styles.text} mb-2`}>
                                    <i className="fas fa-file-alt mr-2"></i>
                                    {law.title}
                                </h4>
                                <p className="text-gray-700">{law.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Laws;
