import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/users" className="hover:text-gray-300">
            Users
          </Link>
        </li>
        <li>
          <a href="#analytics" className="hover:text-gray-300">
            Analytics
          </a>
        </li>
        <li>
          <a href="#settings" className="hover:text-gray-300">
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
