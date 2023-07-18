import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { breakpoints } from '../theme';

const images = ['hero.jpeg', 'gal-10.jpeg', 'back.jpg'];

const AnimationWrapper = styled.section`
    .container {
    }

    .image {
        position: absolute;
        width: 95%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.5s ease;

        border: 20px dashed #ccc; /* Add border style here */
    }

    .fade-in {
        opacity: 1;
    }

    @keyframes slide-in {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .slide-in {
        animation: slide-in 0.5s ease;
    }

    @media only screen and (max-width: ${breakpoints.lg}) {
        .image {
            width: 100%;
        }
    }
`;

export default function Animation() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimationWrapper>
            <div className="container">
                {images.map((image, index) => (
                    <img
                        key={index}
                        className={`image ${index === currentImage ? 'fade-in slide-in' : ''}`}
                        src={`images/${images[index]}`}
                        alt={`Image ${index + 1}`}
                    />
                ))}
            </div>
        </AnimationWrapper>
    );
}