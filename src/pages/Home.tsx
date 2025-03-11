import React from 'react';
import { Link } from 'react-router-dom';
import { getImagePath } from '../lib/imageUtils';
import house from './house.jpg';

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${house})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
          <div className="max-w-7xl mx-auto h-full flex items-center px-4">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">Welcome Theta Xi Alumni</h1>
              <p className="text-xl mb-8">CU Boulder Chapter</p>
              <div className="space-x-4">
                <Link 
                  to="/donate" 
                  className="bg-azure-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Support Our Future
                </Link>
                <Link
                  to="/brotherhood"
                  className="border-2 border-white hover:bg-white hover:text-azure-blue text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  View Updates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-azure-blue">Stay Connected</h2>
            <p className="mb-4">Keep up with brotherhood updates and upcoming events.</p>
            <Link 
              to="/brotherhood" 
              className="text-azure-blue hover:text-blue-700 font-semibold"
            >
              View Updates →
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-azure-blue">Give Back</h2>
            <p className="mb-4">Join our community service initiatives and make a difference.</p>
            <Link 
              to="/service" 
              className="text-azure-blue hover:text-blue-700 font-semibold"
            >
              Get Involved →
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-azure-blue">Support Growth</h2>
            <p className="mb-4">Help us build the future of Theta Xi at CU Boulder.</p>
            <Link 
              to="/donate" 
              className="text-azure-blue hover:text-blue-700 font-semibold"
            >
              Donate Now →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}