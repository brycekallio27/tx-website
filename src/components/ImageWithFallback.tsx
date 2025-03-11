import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
}

/**
 * A component that renders an image with a fallback
 * Useful when using local images that might fail to load
 */
export default function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  className = '',
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  return (
    <img
      src={error ? fallbackSrc : src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}