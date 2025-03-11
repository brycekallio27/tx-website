import React from 'react';
import cj from './cj.png';

export default function Service() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Service</h1>
          <p className="text-xl text-gray-600">Making a difference in our community</p>
        </div>

        {/* Current Initiatives Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-azure-blue mb-6">Current Initiatives</h2>
          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1571333250630-f0230c320b6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Biking Project" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Community Biking Initiative</h3>
                <p className="text-gray-600 mb-4">Brothers Cooper Cummings and John Perkins are leading our cycling program, promoting sustainable transportation and community engagement through organized bike events.</p>
                
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="md:w-1/3">
                    <img 
                      src={cj}
                      alt="Cooper and John" 
                      className="rounded-lg shadow-sm w-full h-auto"
                    />
                    <p className="text-sm text-gray-500 mt-2 text-center">John Perkins and Cooper Cummings</p>
                  </div>
                  <div className="md:w-2/3">
                    <div className="bg-azure-blue/5 p-4 rounded-lg border border-azure-blue/20">
                      <h4 className="font-semibold text-azure-blue mb-2">Ring of Resilience</h4>
                      <p className="text-gray-700">Support our brothers' cycling initiative aimed at promoting mental health awareness and community building through biking events. Cooper and John have organized multiple charity rides that have raised over $10,000 for mental health resources on campus.</p>
                      <div className="mt-4">
                        <a 
                          href="https://www.ringofresilience.com" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-block bg-azure-blue text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        >
                          Donate & Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <a href="#get-involved" className="text-azure-blue hover:text-blue-700 font-semibold">Join Us →</a>
                  <div className="flex space-x-2">
                    <span className="inline-block px-3 py-1 bg-azure-blue/10 text-azure-blue rounded-full text-sm">Mental Health</span>
                    <span className="inline-block px-3 py-1 bg-azure-blue/10 text-azure-blue rounded-full text-sm">Cycling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get Involved Section */}
        <div id="get-involved" className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-azure-blue mb-6">Get Involved</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-azure-blue focus:ring-azure-blue"
              />
            </div>
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-700">I'm interested in:</label>
              <select
                id="interest"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-azure-blue focus:ring-azure-blue"
              >
                <option>Community Biking Initiative</option>
                <option>Other Opportunities</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-azure-blue text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Sign Up to Volunteer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}