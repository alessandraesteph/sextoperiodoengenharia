import React, { useRef, useState } from 'react';
import TestimonialCard from '../components/TestimonialCard.tsx';    
import Biologa from '../assets/images/biologa.jpg';
import Veterinario from '../assets/images/veterinario.jpg'; 
import Ong from '../assets/images/ong.jpg'  
const testimonials = [
    {
        image: Veterinario,
        name: 'Dr. Carlos Almeida',
        position: 'Veterinário',
        stars: 5,
        testimony: 'O AnimalLife oferece dados vitais em tempo real e com precisão. Isso me permite tomar decisões rápidas para o tratamento dos animais. Essencial para minha clínica!',
    },
    {
        image: Biologa,
        name: 'Ana Souza',
        position: 'Biólogo',
        stars: 4,
        testimony: 'O dispositivo tornou o monitoramento de animais silvestres muito mais fácil. Agora podemos acompanhar a saúde sem causar estresse. Fundamental para nosso trabalho de campo!',
    },
    {
        image: Ong,
        name: 'Mariana Pereira',
        position: 'ONG de Proteção Animal',
        stars: 5,
        testimony: 'AnimalLife tem sido uma solução incrível para o monitoramento dos animais resgatados. Conseguimos antecipar problemas de saúde e melhorar os cuidados. Tecnologia que faz a diferença!',
    },
];

const TestimonialCarousel: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartPosition(e.pageX - carouselRef.current!.offsetLeft);
        setScrollLeft(carouselRef.current!.scrollLeft);
    };

    const handleMouseLeaveOrUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const x = e.pageX - carouselRef.current!.offsetLeft;
        const walk = (x - startPosition) * 1.5; 
        carouselRef.current!.scrollLeft = scrollLeft - walk;
    };

    return (
        <div
            className="testimonial-carousel"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
        >
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
            ))}
        </div>
    );
};

export default TestimonialCarousel;
