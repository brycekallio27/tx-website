/**
 * Helper function to get the correct path for an image
 * Works with both imported assets and external URLs
 */
export function getImagePath(path: string): string {
  // Check if the path is a URL
  if (path.startsWith('http') || path.startsWith('https')) {
    return path;
  }
  
  // For local images, try to use the import.meta.url approach
  try {
    // This is a dynamic import, which will be processed by Vite
    const imageUrl = new URL(`../assets/${path}`, import.meta.url).href;
    return imageUrl;
  } catch (error) {
    console.error(`Failed to load image: ${path}`, error);
    return path;
  }
}

/**
 * Example usage in a component:
 * 
 * import { getImagePath } from '../lib/imageUtils';
 * 
 * function MyComponent() {
 *   return (
 *     <img 
 *       src={getImagePath('founders-day.jpg')} 
 *       alt="Founders Day" 
 *     />
 *   );
 * }
 */