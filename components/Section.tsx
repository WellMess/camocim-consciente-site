
import React, { useRef, useEffect, useState } from 'react';

interface SectionProps {
    id: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <section 
            id={id} 
            ref={ref}
            className={`fade-in-on-scroll ${isVisible ? 'is-visible' : ''}`}
        >
            {children}
        </section>
    );
};

export default Section;
