import React from 'react';
//import maybeImage from './maybe.png';
import pee from './pee3.png';
import award from './big4head.png';

export default function Brotherhood() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Brotherhood Updates</h1>
          <p className="text-xl text-gray-600">Stay connected with your Theta Xi brothers</p>
        </div>

        {/* Recent Updates Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-azure-blue mb-6">Recent Updates</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* New Associate Members Announcement */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={pee}
                alt="New Members Welcome"
                className="w-full h-64 object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Welcome New Associate Members!</h3>
                <div className="bg-azure-blue/5 p-4 rounded-lg border border-azure-blue/20">
                  <p className="text-gray-700">We're thrilled to announce that <span className="font-semibold">31 Associate Members</span> have joined our brotherhood! A huge thank you to our Rush Chairs, <span className="font-semibold">Carter Smith (#1395)</span> and <span className="font-semibold">Tashi Landers-Quinn (#1367)</span>, for their hard work and dedication in making this rush season a success.</p>
                  <p className="text-gray-700 mt-4">We're excited to see what these new members bring to Theta Xi and look forward to watching them grow within our fraternity. Here's to the future and the continued strength of our brotherhood!</p>
                </div>
                <p className="text-sm text-gray-500 mt-4">Posted on February 19, 2025</p>
              </div>
            </div>

            {/* Founders Day Update */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Founders Day Event" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Founders Day Celebration</h3>
                <div className="bg-azure-blue/5 p-4 rounded-lg border border-azure-blue/20">
                  <h4 className="font-semibold text-azure-blue mb-2">Save the Date!</h4>
                  <p className="text-gray-700">Brothers, mark your calendars! Join us on Sunday, April 13th, as we celebrate Theta Xi's Founders Day with a day full of activities and an evening gathering. This is a great opportunity to reconnect, reminisce, and strengthen the bonds of brotherhood.</p>
                  <div className="mt-4">
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdAW57awR0TfagYcEqH42mnCVJzZZB0LCFY4uvk_6zxTxB-pw/viewform" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block bg-azure-blue text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Register Interest
                    </a>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">Posted on February 19, 2025</p>
              </div>
            </div>

            {/* IFC Awards Update */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={award}
                alt="Trophy" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">IFC Awards Recognition</h3>
                <div className="space-y-2">
                  <div className="bg-azure-blue/5 px-3 py-2 rounded-lg">
                    <span className="font-semibold text-azure-blue">Chapter of the Year 2024</span>
                  </div>
                  <div className="bg-azure-blue/5 px-3 py-2 rounded-lg">
                    <span className="font-semibold text-azure-blue">President of the Year 2024</span>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">Our chapter has been recognized by the Interfraternity Council for excellence in leadership and overall chapter performance.</p>
                <p className="text-sm text-gray-500 mt-2">Posted on February 19, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}