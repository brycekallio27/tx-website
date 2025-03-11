import React from 'react';
import theta from './theta.jpg';


export default function Donate() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Our Future</h1>
          <p className="text-xl text-gray-600">Help us build a stronger Theta Xi at CU Boulder</p>
        </div>

        {/* Alumni Appeal Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-azure-blue mb-6">A Message from Your Brothers</h2>
              <div className="prose text-gray-700">
                <p>I have an ask of you as alumni brothers. We all benefited tremendously from our time as active members. So, I ask that you consider donating to the Theta Xi Foundation to support the ongoing education and leadership development activities of the Fraternity.</p>
                <p className="mt-4">The QR will take you to the GiveCampus site, where you can donate. The designation field has been pre-set to ensure that your donation directly benefits the Alpha Eta chapter education account. Your donation will be used to cover chapter costs for registration and travel to the Vredenburgh Presidents Academy, Rising Stars Academy, and the Newell Officer Academy, as well as local chapter leadership events.</p>
              </div>
              <div className="mt-6">
                <a 
                  href="https://www.givecampus.com/campaigns/6506/donations/new?donation_type=general&designation=Alpha%20Eta%20Chapter%20-%20Colorado" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-azure-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
                >
                  Donate Now
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <img 
                src={theta} 
                alt="Theta Xi Brothers" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-azure-blue mb-6">Questions About Giving?</h2>
          <p className="text-gray-600 mb-4">Contact our development team to learn more about how you can support Theta Xi at CU Boulder.</p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-azure-blue focus:ring-azure-blue"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-azure-blue focus:ring-azure-blue"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-azure-blue focus:ring-azure-blue"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-azure-blue text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}