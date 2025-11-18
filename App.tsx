
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Themes from './components/Themes';
import QRCode from './components/QRCode';
import Team from './components/Team';
import Supporters from './components/Supporters';
import Laws from './components/Laws';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import BackToTopButton from './components/BackToTopButton';
import { THEMES_DATA } from './constants';
import { ThemeData } from './types';
import Section from './components/Section';

const App: React.FC = () => {
    const [selectedTheme, setSelectedTheme] = useState<ThemeData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = useCallback((themeId: string) => {
        const theme = THEMES_DATA[themeId];
        if (theme) {
            setSelectedTheme(theme);
            setIsModalOpen(true);
            document.body.style.overflow = 'hidden';
        }
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
        // Delay clearing theme to allow for fade-out animation
        setTimeout(() => setSelectedTheme(null), 300);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen, closeModal]);

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Section id="sobre"><About /></Section>
                <Section id="stats"><Stats /></Section>
                <Section id="temas"><Themes onThemeSelect={openModal} /></Section>
                <Section id="qrcode"><QRCode /></Section>
                <Section id="equipe"><Team /></Section>
                <Section id="supporters"><Supporters /></Section>
                <Section id="leis"><Laws /></Section>
                <Section id="contato"><Contact /></Section>
            </main>
            <Footer />
            <Modal isOpen={isModalOpen} onClose={closeModal} theme={selectedTheme} />
            <BackToTopButton />
        </>
    );
};

export default App;
