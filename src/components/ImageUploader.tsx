import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Check, Image as ImageIcon, AlertCircle } from 'lucide-react';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  maxSize?: number; // in bytes
  acceptedFileTypes?: string[];
  className?: string;
}

export default function ImageUploader({
  onImageUpload,
  maxSize = 5 * 1024 * 1024, // 5MB default
  acceptedFileTypes = ['image/jpeg', 'image/png', 'image/webp'],
  className = '',
}: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setError(null);
    
    if (acceptedFiles.length === 0) {
      return;
    }
    
    const file = acceptedFiles[0];
    
    // Check file size
    if (file.size > maxSize) {
      setError(`File is too large. Maximum size is ${(maxSize / (1024 * 1024)).toFixed(1)}MB.`);
      return;
    }
    
    // Create preview
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    
    // Simulate upload process
    setIsUploading(true);
    setIsSuccess(false);
    
    // Call the onImageUpload callback
    onImageUpload(file);
    
    // Simulate upload completion
    setTimeout(() => {
      setIsUploading(false);
      setIsSuccess(true);
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
    
    // Clean up preview URL when component unmounts
    return () => URL.revokeObjectURL(objectUrl);
  }, [maxSize, onImageUpload]);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': acceptedFileTypes,
    },
    maxFiles: 1,
  });
  
  const handleReset = () => {
    setPreview(null);
    setError(null);
    setIsUploading(false);
    setIsSuccess(false);
  };
  
  return (
    <div className={`w-full ${className}`}>
      {!preview ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            isDragActive 
              ? 'border-azure-blue bg-azure-blue/5' 
              : 'border-gray-300 hover:border-azure-blue hover:bg-azure-blue/5'
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center space-y-2">
            <Upload size={36} className={isDragActive ? 'text-azure-blue' : 'text-gray-400'} />
            <p className="text-sm font-medium text-gray-700">
              {isDragActive ? 'Drop the image here' : 'Drag & drop an image here, or click to select'}
            </p>
            <p className="text-xs text-gray-500">
              Supported formats: JPG, PNG, WebP (Max {(maxSize / (1024 * 1024)).toFixed(0)}MB)
            </p>
          </div>
        </div>
      ) : (
        <div className="relative border rounded-lg overflow-hidden">
          <img 
            src={preview} 
            alt="Preview" 
            className="w-full h-48 object-cover"
          />
          
          {/* Overlay for upload status */}
          {(isUploading || isSuccess) && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              {isUploading && (
                <div className="flex flex-col items-center text-white">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                  <p className="mt-2 text-sm">Uploading...</p>
                </div>
              )}
              {isSuccess && (
                <div className="flex flex-col items-center text-white">
                  <div className="rounded-full bg-green-500 p-2">
                    <Check size={24} />
                  </div>
                  <p className="mt-2 text-sm">Upload successful!</p>
                </div>
              )}
            </div>
          )}
          
          {/* Reset button */}
          <button
            onClick={handleReset}
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
            disabled={isUploading}
          >
            <X size={16} className="text-gray-700" />
          </button>
        </div>
      )}
      
      {/* Error message */}
      {error && (
        <div className="mt-2 text-red-500 text-sm flex items-center">
          <AlertCircle size={16} className="mr-1" />
          {error}
        </div>
      )}
    </div>
  );
}