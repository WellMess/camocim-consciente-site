
import React from 'react';

const QRCode: React.FC = () => {
    return (
        <div className="py-20 bg-bege-areia">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-azul-marinho mb-6">
                        <i className="fas fa-qrcode mr-3"></i>
                        Como Funciona o QR Code
                    </h2>
                    <div className="w-24 h-1 bg-verde-sustentavel mx-auto mb-8"></div>
                    
                    <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="text-left">
                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                    As placas educativas instaladas na praia, mangue e áreas naturais possuem <strong>QR Codes</strong> que levam diretamente a este site.
                                </p>
                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                    Ao escanear o código, visitantes e moradores podem aprender sobre o ambiente em que estão, acessar fotos, vídeos e dicas de preservação.
                                </p>
                                <div className="bg-verde-sustentavel bg-opacity-10 p-6 rounded-lg">
                                    <p className="text-xl font-semibold text-verde-escuro">
                                        <i className="fas fa-mobile-alt mr-2"></i>
                                        Um toque no celular que conecta você à natureza
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex justify-center">
                                <div className="bg-white p-6 rounded-xl shadow-lg">
                                    <img 
                                        src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://camocim-consciente.exemplo.com" 
                                        alt="QR Code Exemplo" 
                                        className="w-64 h-64"
                                        loading="lazy"
                                    />
                                    <p className="text-center mt-4 text-sm text-gray-600">Escaneie para acessar o site</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QRCode;
