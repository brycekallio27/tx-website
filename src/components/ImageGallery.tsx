import React from 'react';
import { getImagePath } from '../lib/imageUtils';
import ImageWithFallback from './ImageWithFallback';

interface Image {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: Image[];
  className?: string;
}

export default function ImageGallery({ images, className = '' }: ImageGalleryProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-md">
          <div className="relative h-48 overflow-hidden">
            <ImageWithFallback
              src={getImagePath(image.src)}
              fallbackSrc="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          {image.caption && (
            <div className="p-3 bg-white">
              <p className="text-sm text-gray-700">{image.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * Example usage:
 * 
 * const images = [
 *   {
 *     src: 'brotherhood-event.jpg',
 *     alt: 'Brotherhood Event 2025',
 *     caption: 'Brothers at the annual retreat'
 *   },
 *   {
 *     src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac',
 *     alt: 'External image example',
 *     caption: 'This is loaded from an external URL'
 *   }
 * ];
 * 
 * <ImageGallery images={images} className="my-8" />
 */