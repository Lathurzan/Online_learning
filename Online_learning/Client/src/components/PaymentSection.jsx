import React from "react";

function PaymentSection() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Membership Payment</h2>

        <form>
          {/* Membership Plan */}
          <div className="mb-4">
            <label
              htmlFor="membership-plan"
              className="block text-gray-700 font-medium mb-2"
            >
              Membership Plan
            </label>
            <select
              id="membership-plan"
              className="block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Select a Plan</option>
              <option>Basic - $50/year</option>
              <option>Premium - $100/year</option>
              <option>Family - $150/year</option>
            </select>
          </div>

          {/* Cardholder Name */}
          <div className="mb-4">
            <label
              htmlFor="cardholder-name"
              className="block text-gray-700 font-medium mb-2"
            >
              Cardholder Name
            </label>
            <input
              type="text"
              id="cardholder-name"
              placeholder="Enter cardholder's name"
              className="block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Card Number */}
          <div className="mb-4">
            <label
              htmlFor="card-number"
              className="block text-gray-700 font-medium mb-2"
            >
              Card Number
            </label>
            <input
              type="text"
              id="card-number"
              placeholder="1234 5678 9012 3456"
              className="block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Expiry Date and CVV */}
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label
                htmlFor="expiry-date"
                className="block text-gray-700 font-medium mb-2"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiry-date"
                placeholder="MM/YY"
                className="block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="cvv"
                className="block text-gray-700 font-medium mb-2"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                placeholder="123"
                className="block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Additional Library Questions */}
          <div className="mb-4">
            <label
              htmlFor="library-selection"
              className="block text-gray-700 font-medium mb-2"
            >
              Select a Library
            </label>
            <select
              id="library-selection"
              className="block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Select a Library</option>
              <option>Library A</option>
              <option>Library B</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="membership-category"
              className="block text-gray-700 font-medium mb-2"
            >
              Membership Category
            </label>
            <select
              id="membership-category"
              className="block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Select a Category</option>
              <option>Basic</option>
              <option>Premium</option>
              <option>Family</option>
            </select>
          </div>

          {/* Personal Information */}
          <div className="mb-4">
            <label
              htmlFor="salutation"
              className="block text-gray-700 font-medium mb-2"
            >
              Salutation
            </label>
            <select
              id="salutation"
              className="block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Select Salutation</option>
              <option>Mr.</option>
              <option>Ms.</option>
              <option>Dr.</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="surname"
              className="block text-gray-700 font-medium mb-2"
            >
              Surname
            </label>
            <input
              type="text"
              id="surname"
              placeholder="Enter surname"
              className="block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="firstname"
              className="block text-gray-700 font-medium mb-2"
            >
              Firstname
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Enter first name"
              className="block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Contact Details */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Primary Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-2"
            >
              Primary Phone
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Enter phone number"
              className="block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Additional Questions */}
          <div className="mb-4">
            <label
              htmlFor="how-did-you-hear"
              className="block text-gray-700 font-medium mb-2"
            >
              How did you hear about us?
            </label>
            <select
              id="how-did-you-hear"
              className="block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Select Option</option>
              <option>Internet</option>
              <option>Friend</option>
              <option>Advertisement</option>
            </select>
          </div>

          {/* Privacy Notice */}
          <div className="mb-4">
            <p className="text-gray-700 text-sm">
              By submitting, you agree to the privacy notice and terms & conditions.
            </p>
          </div>

          {/* Terms & Conditions */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="terms-and-conditions"
              className="mr-2"
            />
            <label
              htmlFor="terms-and-conditions"
              className="text-gray-700 font-medium"
            >
              I agree to the Terms and Conditions.
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentSection;
