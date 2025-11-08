
import React from 'react';

const Stats: React.FC = () => {
    return (
        <div className="py-20 bg-azul-marinho text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <i className="fas fa-chart-line mr-3"></i>
                        Impactos em Números
                    </h2>
                    <div className="w-24 h-1 bg-verde-sustentavel mx-auto mb-8"></div>
                    <p className="text-xl opacity-90">Dados oficiais que mostram a urgência da preservação ambiental</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl text-center card-hover">
                        <i className="fas fa-recycle text-5xl mb-4 text-green-300"></i>
                        <div className="stat-number text-verde-sustentavel mb-2">2,4 milhões</div>
                        <p className="text-sm opacity-90">toneladas de plástico chegam ao mar no Brasil por ano</p>
                        <p className="text-xs mt-3 opacity-70">(MMA, 2023)</p>
                    </div>
                    
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl text-center card-hover">
                        <i className="fas fa-tree text-5xl mb-4 text-green-300"></i>
                        <div className="stat-number text-red-400 mb-2">35%</div>
                        <p className="text-sm opacity-90">dos manguezais do Nordeste estão sob risco de degradação</p>
                        <p className="text-xs mt-3 opacity-70">(ICMBio, 2024)</p>
                    </div>
                    
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl text-center card-hover">
                        <i className="fas fa-exclamation-triangle text-5xl mb-4 text-yellow-300"></i>
                        <div className="stat-number text-yellow-300 mb-2">48%</div>
                        <p className="text-sm opacity-90">das restingas do Ceará estão modificadas por ocupações irregulares</p>
                        <p className="text-xs mt-3 opacity-70">(IBGE, 2022)</p>
                    </div>
                    
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl text-center card-hover">
                        <i className="fas fa-city text-5xl mb-4 text-orange-300"></i>
                        <div className="stat-number text-orange-300 mb-2">
                            <i className="fas fa-arrow-up"></i>
                        </div>
                        <p className="text-sm opacity-90">Crescimento urbano em Camocim pressiona dunas, restingas e manguezais</p>
                        <p className="text-xs mt-3 opacity-70">(SEMA/CE, 2024)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
