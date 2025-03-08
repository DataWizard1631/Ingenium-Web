import React from 'react';

const CloudinaryImage = ({ src, alt, className }) => {
  // Add CORS parameters to URL
  const corsUrl = src.includes('cloudinary.com') 
    ? `${src.replace('/upload/', '/upload/f_auto,fl_lossy/')}` 
    : src;

  return (
    <img
      src={corsUrl}
      alt={alt}
      className={className}
      crossOrigin="anonymous"
      loading="lazy"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = '/path/to/fallback/image.jpg'; // Add a fallback image
      }}
    />
  );
};

export default CloudinaryImage; 