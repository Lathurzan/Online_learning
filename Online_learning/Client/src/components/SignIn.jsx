import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignIn({ onClose }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // reset previous error

    try {
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // Save token to localStorage
        onClose(); // Close the login form
        navigate("/"); // Redirect to home page
      } else {
        setError(data.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  // Base styles for inputs
  const inputBase =
    "w-full p-3 rounded-md border focus:outline-none focus:ring-2 transition-colors text-gray-800";
  const errorClass = "border-red-500 focus:ring-red-300";
  const normalClass = "border-gray-300 focus:ring-purple-300";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4">
          <h2 className="text-gray-900 text-center text-2xl font-bold">
            Welcome Back!
          </h2>
        </div>
        <div className="p-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-600 text-center rounded">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Enter your email or username"
                className={`${inputBase} ${error ? errorClass : normalClass}`}
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className={`${inputBase} ${error ? errorClass : normalClass}`}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-md hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              Sign In
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              onClick={onClose}
              className="text-purple-600 hover:underline font-medium"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
