import React from 'react';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">Theta Xi Fraternity - Alpha Eta Chapter</p>
            <p className="text-gray-500 text-sm">University of Colorado Boulder</p>
          </div>
          <div className="flex items-center">
            <Mail size={18} className="text-azure-blue mr-2" />
            <a 
              href="mailto:txalphaeta@gmail.com" 
              className="text-azure-blue hover:text-blue-700 transition-colors"
            >
              txalphaeta@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}