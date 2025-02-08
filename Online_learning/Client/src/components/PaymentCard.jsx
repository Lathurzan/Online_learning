import React from 'react';

function StandardCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 border border-gray-300 hover:shadow-xl transition-shadow duration-300 flex-1">
      <h2 className="text-2xl font-semibold mb-2">Standard Card</h2>
      <p className="text-gray-700">Details about the standard card.</p>
    </div>
  );
}

function PremiumCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 border border-yellow-400 hover:shadow-xl transition-shadow duration-300 flex-1">
      <h2 className="text-2xl font-semibold mb-2 text-yellow-600">Premium Card</h2>
      <p className="text-gray-700">Details about the premium card.</p>
    </div>
  );
}

export default function PaymentCard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Payment Card</h1>
      <div className="flex flex-col md:flex-row justify-center items-stretch">
        <StandardCard />
        <PremiumCard />
      </div>
    </div>
  );
}
