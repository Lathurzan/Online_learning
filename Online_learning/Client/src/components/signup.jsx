import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUp({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    sureName: "",
    age: "",
    gender: "",
    district: "",
    email: "",
    username: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset previous errors

    try {
      const response = await fetch("http://localhost:5000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/"); // Redirect to home page on success
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  // Base styles for inputs
  const inputBase =
    "w-full p-3 rounded-md border focus:outline-none focus:ring-2 transition-colors";
  const normalInputClass = "border-gray-300 focus:ring-purple-300";
  const errorInputClass = "border-red-500 focus:ring-red-300";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-lg overflow-hidden">
        {/* Header with Gradient */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4">
          <h2 className="text-white text-center text-2xl font-bold">
            Create Account
          </h2>
        </div>
        <div className="p-8 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
          {/* Error Alert */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-600 text-center rounded">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className={`${inputBase} ${error ? errorInputClass : normalInputClass}`}
                required
              />
              <input
                type="text"
                name="sureName"
                value={formData.sureName}
                onChange={handleChange}
                placeholder="Sure Name"
                className={`${inputBase} ${error ? errorInputClass : normalInputClass}`}
                required
              />
            </div>
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                min="0"
                step="1"
                className={`${inputBase} ${error ? errorInputClass : normalInputClass}`}
                required
              />

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`${inputBase} ${error ? errorInputClass : normalInputClass}`}
                required
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
                placeholder="District"
                className={`${inputBase} ${error ? errorInputClass : normalInputClass}`}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={`${inputBase} ${error ? errorInputClass : normalInputClass}`}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className={`${inputBase} ${error ? errorInputClass : normalInputClass}`}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className={`${inputBase} ${error ? errorInputClass : normalInputClass}`}
                required
              />
            </div>
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <span className="ml-2 text-gray-700">Remember Me</span>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-md hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/signin"
              onClick={onClose}
              className="text-purple-600 hover:underline font-medium"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
