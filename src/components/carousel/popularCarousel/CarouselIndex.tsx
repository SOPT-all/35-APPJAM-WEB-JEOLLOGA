import indexStyle, { indexContainer } from '@components/carousel/popularCarousel/carouselIndex.css';
import React from 'react';

interface CarouselIndexProps {
  total: number;
  currentIndex: number;
}

const CarouselIndex = ({ total, currentIndex }: CarouselIndexProps) => {
  return (
    <div className={indexContainer}>
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={indexStyle({ state: index === currentIndex ? 'active' : 'inactive' })}
        />
      ))}
    </div>
  );
};

export default CarouselIndex;
