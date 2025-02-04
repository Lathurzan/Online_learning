// AdminSettings.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    username: '',
    email: '',
    // Add any additional settings fields here
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  // Fetch admin settings on component mount
  useEffect(() => {
    axios.get('http://localhost:5000/api/admin/settings', {
      withCredentials: true, // if using cookies
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` // or wherever you store your JWT token
      }
    })
      .then(response => {
        setSettings(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching admin settings:", error);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:5000/api/admin/settings', settings, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error("Error updating admin settings:", error);
        setMessage('Error updating settings');
      });
  };

  if (loading) return <div>Loading settings...</div>;

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Admin Settings</h2>
      {message && <p className="mb-4">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={settings.username}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        {/* Add additional fields as needed */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AdminSettings;
