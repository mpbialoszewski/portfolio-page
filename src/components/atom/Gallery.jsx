import React, { useState, useRef, useEffect } from 'react';
import { imagesData } from '../../constants/data';
import GalleryItem from './GalleryItem';
import ImageModal from './ImageModal';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showArrows, setShowArrows] = useState(false);
  const scrollRef = useRef(null);


  const checkOverflow = () => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      setShowArrows(scrollWidth > clientWidth);
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  const handleScroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;
    const scrollAmount = 340;
    
    if (direction === 'left') {
      current.scrollLeft <= 0 
        ? current.scrollTo({ left: current.scrollWidth, behavior: 'smooth' })
        : current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollLeft + current.offsetWidth >= current.scrollWidth - 10
        ? current.scrollTo({ left: 0, behavior: 'smooth' })
        : current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="gallery-wrapper">

      {showArrows && (
        <button className="arrow-btn" onClick={() => handleScroll('left')}>&#10094;</button>
      )}
      
      <div className="images-container" ref={scrollRef}>
        {imagesData.map(img => (
          <GalleryItem key={img.id} img={img} onClick={setSelectedImg} />
        ))}
      </div>

      {showArrows && (
        <button className="arrow-btn" onClick={() => handleScroll('right')}>&#10095;</button>
      )}

      <ImageModal 
        isOpen={!!selectedImg} 
        image={selectedImg} 
        onClose={() => setSelectedImg(null)} 
      />
    </div>
  );
};

export default Gallery;