import React, { useState, useEffect } from 'react';
import { getImagePath } from '../lib/imageUtils';
import ImageUploader from '../components/ImageUploader';
import ImageGallery from '../components/ImageGallery';
import { Trash2, Download, Copy, CheckCircle } from 'lucide-react';

interface UploadedImage {
  id: string;
  name: string;
  src: string;
  uploadedAt: Date;
}

export default function ImageManager() {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<UploadedImage | null>(null);
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  // Load images from localStorage on component mount
  useEffect(() => {
    const savedImages = localStorage.getItem('uploadedImages');
    if (savedImages) {
      try {
        setUploadedImages(JSON.parse(savedImages));
      } catch (error) {
        console.error('Failed to parse saved images', error);
      }
    }
  }, []);

  // Save images to localStorage when they change
  useEffect(() => {
    localStorage.setItem('uploadedImages', JSON.stringify(uploadedImages));
  }, [uploadedImages]);

  const handleImageUpload = (file: File) => {
    // Create a local URL for the file
    const objectUrl = URL.createObjectURL(file);
    
    // In a real app, you would upload to a server or storage service here
    // For this demo, we'll just store it locally
    
    const newImage: UploadedImage = {
      id: Date.now().toString(),
      name: file.name,
      src: objectUrl,
      uploadedAt: new Date(),
    };
    
    setUploadedImages(prev => [newImage, ...prev]);
  };

  const handleDeleteImage = (id: string) => {
    setUploadedImages(prev => prev.filter(img => img.id !== id));
    if (selectedImage?.id === id) {
      setSelectedImage(null);
    }
  };

  const handleCopyPath = (image: UploadedImage) => {
    // In a real app with server storage, this would be the path to use in components
    const path = image.name;
    navigator.clipboard.writeText(path);
    setCopiedPath(image.id);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Image Manager</h1>
        
        {/* Upload Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-azure-blue mb-4">Upload New Image</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ImageUploader onImageUpload={handleImageUpload} />
          </div>
        </section>
        
        {/* Image Library */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-azure-blue mb-4">Your Image Library</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            {uploadedImages.length === 0 ? (
              <div className="text-center py-12">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Trash2 size={24} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">No images yet</h3>
                <p className="text-gray-500 mt-1">Upload your first image above</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {uploadedImages.map(image => (
                  <div 
                    key={image.id} 
                    className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                      selectedImage?.id === image.id ? 'ring-2 ring-azure-blue' : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <p className="font-medium text-gray-900 truncate">{image.name}</p>
                      <p className="text-sm text-gray-500">{formatDate(image.uploadedAt)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Selected Image Details */}
        {selectedImage && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-azure-blue mb-4">Image Details</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.name} 
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{selectedImage.name}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Uploaded</p>
                      <p>{formatDate(selectedImage.uploadedAt)}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-500">Usage in Components</p>
                      <div className="mt-2 bg-gray-50 p-4 rounded-md">
                        <code className="text-sm font-mono">
                          {`import { getImagePath } from '../lib/imageUtils';`}<br/>
                          <br/>
                          {`<img src={getImagePath('${selectedImage.name}')} alt="${selectedImage.name}" />`}
                        </code>
                        <button 
                          onClick={() => handleCopyPath(selectedImage)}
                          className="mt-2 flex items-center text-sm text-azure-blue hover:text-blue-700"
                        >
                          {copiedPath === selectedImage.id ? (
                            <>
                              <CheckCircle size={16} className="mr-1" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy size={16} className="mr-1" />
                              Copy filename
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    
                    <div className="pt-4 flex space-x-4">
                      <button
                        onClick={() => handleDeleteImage(selectedImage.id)}
                        className="flex items-center text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={16} className="mr-1" />
                        Delete Image
                      </button>
                      
                      <a
                        href={selectedImage.src}
                        download={selectedImage.name}
                        className="flex items-center text-azure-blue hover:text-blue-700"
                      >
                        <Download size={16} className="mr-1" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Usage Instructions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-azure-blue mb-4">How to Use Your Images</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="prose max-w-none">
              <h3>Step 1: Upload Your Images</h3>
              <p>Use the uploader above to add images to your library.</p>
              
              <h3>Step 2: Copy the Image Name</h3>
              <p>Click on an image in your library to view its details and copy the filename.</p>
              
              <h3>Step 3: Use in Your Components</h3>
              <p>Import the <code>getImagePath</code> utility and use it with your image name:</p>
              
              <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto">
                <code className="text-sm">
{`import { getImagePath } from '../lib/imageUtils';

function MyComponent() {
  return (
    <img 
      src={getImagePath('your-image-name.jpg')} 
      alt="Description" 
      className="w-full rounded-lg"
    />
  );
}`}
                </code>
              </pre>
              
              <h3>For Background Images:</h3>
              <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto">
                <code className="text-sm">
{`<div 
  className="h-64 bg-cover bg-center" 
  style={{ backgroundImage: \`url(\${getImagePath('your-image-name.jpg')})\` }}
>
  Content goes here
</div>`}
                </code>
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}