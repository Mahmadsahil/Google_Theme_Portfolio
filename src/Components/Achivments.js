import React, { useEffect, useState } from 'react';
import Achivement1 from "../Utils/Achivement1.jpg"
import Achivement2 from "../Utils/Achivement2.jpg"

const slides = [
    { image: Achivement1, description: 'First Rank In Final Year🏆' },
    { image: Achivement2, description: 'Institute Topper🥇' },
];

const Achievements = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg h-72 md:h-96">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute w-full transition-opacity duration-1000 flex justify-center items-center ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img src={slide.image} alt={`Slide ${index + 1}`} className="h-72 md:h-96" />
                        <p className="w-full text-center absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">{slide.description}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Achievements;
