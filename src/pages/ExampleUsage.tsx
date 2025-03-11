import React from 'react';
import { getImagePath } from '../lib/imageUtils';
import ImageWithFallback from '../components/ImageWithFallback';
import ImageGallery from '../components/ImageGallery';

export default function ExampleUsage() {
  // Example gallery images
  const galleryImages = [
    {
      src: 'brotherhood-event.jpg', // This would be a local image in src/assets/
      alt: 'Brotherhood Event',
      caption: 'Annual brotherhood retreat'
    },
    {
      src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94',
      alt: 'Founders Day',
      caption: 'Celebrating our heritage'
    },
    {
      src: 'service-project.jpg', // This would be a local image in src/assets/
      alt: 'Service Project',
      caption: 'Making a difference in our community'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Image Usage Examples</h1>
        
        {/* Example 1: Direct usage with getImagePath */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-azure-blue mb-4">Example 1: Direct Image Path</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img 
              src={getImagePath('theta-xi-logo.jpg')} 
              alt="Theta Xi Logo" 
              className="w-full max-w-md mx-auto rounded-lg"
            />
            <p className="text-center mt-4 text-gray-600">
              Using getImagePath helper to load a local image
            </p>
          </div>
        </section>
        
        {/* Example 2: Using ImageWithFallback */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-azure-blue mb-4">Example 2: Image with Fallback</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ImageWithFallback
              src={getImagePath('group-photo.jpg')}
              fallbackSrc="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Group Photo"
              className="w-full max-w-md mx-auto rounded-lg"
            />
            <p className="text-center mt-4 text-gray-600">
              Using ImageWithFallback component that will show a fallback if the image fails to load
            </p>
          </div>
        </section>
        
        {/* Example 3: Image Gallery */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-azure-blue mb-4">Example 3: Image Gallery</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ImageGallery images={galleryImages} />
            <p className="text-center mt-4 text-gray-600">
              Using ImageGallery component to display multiple images in a grid
            </p>
          </div>
        </section>
        
        {/* Example 4: Background Image */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-azure-blue mb-4">Example 4: Background Image</h2>
          <div 
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div 
              className="h-64 bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${getImagePath('campus-view.jpg')})` }}
            >
              <div className="bg-black/50 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold">Using Background Images</h3>
                <p>Apply images as backgrounds for sections</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}