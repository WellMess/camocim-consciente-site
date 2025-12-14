
import React from 'react';
import { ThemeData } from '../types';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    theme: ThemeData | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, theme }) => {
    if (!theme) return null;

    return (
        <div 
            className={`fixed inset-0 bg-black bg-opacity-75 z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose}
        >
            <div className="flex items-center justify-center min-h-screen p-4">
                <div 
                    className={`bg-white rounded-xl max-w-xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} // Reduzido para max-w-xl para formato mais vertical
                    onClick={e => e.stopPropagation()}
                >
                    <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-azul-marinho">
                            <i className={`fas ${theme.icon} ${theme.color} mr-3`}></i>{theme.title}
                        </h3>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-3xl">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <div className="pt-0"> // Removido padding superior e lateral para a imagem
                         <div className="mb-0"> // Removido margin-bottom do container da imagem
                            <img src={theme.image} alt={theme.title} className="w-full h-auto object-contain mb-0" style={{ maxHeight: '70vh' }}/> // Removido rounded-lg e shadow-lg para maximizar a área, e mb-6
                            {/* Citação (quote) removida conforme solicitação do usuário. */}
                        </div>
                        {/* Conteúdo de texto removido conforme solicitação do usuário. Agora exibe apenas a imagem. */}
                        <div className="mt-8 pt-6 border-t border-gray-200 p-8"> // Adicionado padding para o botão de fechar
                            <button onClick={onClose} className="bg-azul-marinho hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-lg transition">
                                <i className="fas fa-times mr-2"></i>Fechar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
