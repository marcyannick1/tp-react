// Carousel.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faBone } from '@fortawesome/free-solid-svg-icons'; // Importer l'icône d'os
import './Carrousel.css'; // Assurez-vous que le CSS est importé
import doc8 from '../assets/doc8.jpeg';
import doc9 from '../assets/doc9.jpeg';
import doc10 from '../assets/doc10.jpeg';
import doc11 from '../assets/doc11.jpeg';
import doc12 from '../assets/doc12.jpeg';
import doc13 from '../assets/doc13.jpeg';



const reviews = [
  {
    id: 1,
    text: "Le Dr. Doe et son équipe sont incroyables. Ils ont sauvé la vie de mon chien!",
    name: "Marie L.",
    imgSrc: doc9,
    rating: 5
  },
  {
    id: 2,
    text: "Service fantastique et très professionnel. Je recommande vivement cette clinique.",
    name: "Jean P.",
    imgSrc: doc10,
    rating: 5
  },
  {
    id: 3,
    text: "L'équipe est très attentionnée et compétente. Mon chat reçoit toujours les meilleurs soins.",
    name: "Claire R.",
    imgSrc: doc8,
    rating: 5
  },
  {
    id: 4,
    text: "J'ai eu une expérience exceptionnelle avec cette clinique. Le personnel est chaleureux et toujours prêt à aider.",
    name: "Paul M.",
    imgSrc: doc12, 
    rating: 5
  },
  {
    id: 5,
    text: "Les soins prodigués à mon animal ont été remarquables. Je me sens en confiance à chaque visite.",
    name: "Sophie B.",
    imgSrc: doc13, 
    rating: 5
  },
  {
    id: 6,
    text: "Un excellent service client avec une équipe dédiée aux besoins de nos compagnons à quatre pattes. Hautement recommandé!",
    name: "Marc T.",
    imgSrc: doc11, 
    rating: 5
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const review = reviews[currentIndex];

  return (
    <div className="carousel">
      <div className="carousel-container">
        <div className="carousel-card">
          <p>
            <FontAwesomeIcon icon={faQuoteLeft} style={{ marginRight: '10px' }} />
            {review.text}
            <FontAwesomeIcon icon={faQuoteRight} style={{ marginLeft: '10px' }} />
          </p>
          <div className="carousel-profile">
            <img src={review.imgSrc} alt={review.name} className="profile-pic" />
            <p>- {review.name}</p>
          </div>
          <div className="carousel-rating">
            {Array.from({ length: review.rating }).map((_, index) => (
              <FontAwesomeIcon key={index} icon={faBone} className="bone" />
            ))}
          </div>
        </div>
      </div>
      <button className="carousel-button prev" onClick={handlePrev}>‹</button>
      <button className="carousel-button next" onClick={handleNext}>›</button>
    </div>
  );
};

export default Carousel;
