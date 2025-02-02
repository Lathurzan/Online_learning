import React from "react";
import { FaUser, FaEnvelope, FaCalendarAlt, FaUserTag } from "react-icons/fa";

const Profile = ({ user, onLogout }) => {
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-semibold text-gray-600">User not found</p>
      </div>
    );
  }

  // Extract initials from first and last name
  const initials = `${user?.firstName?.charAt(0) || ""}${user?.lastName?.charAt(0) || ""}`.toUpperCase();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-6">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center border-t-4 border-green-500">
        
        {/* Profile Picture with Initials */}
        <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center 
            text-white text-5xl font-bold mx-auto shadow-lg border-4 border-white">
          {initials || "U"}
        </div>

        {/* User Information */}
        <h2 className="text-3xl font-bold text-gray-800 mt-4 capitalize">
          {user?.firstName} {user?.lastName}
        </h2>
        <p className="text-gray-500 text-lg">@{user?.username || "username"}</p>

        {/* User Details */}
        <div className="mt-6 space-y-4 text-gray-700 text-left">
          
          {/* Email */}
          <div className="flex items-center gap-3 bg-green-100 p-2 rounded-lg">
            <FaEnvelope className="text-green-600" />
            <span className="font-medium">{user?.email || "user@example.com"}</span>
          </div>

          {/* Role */}
          <div className="flex items-center gap-3 bg-blue-100 p-2 rounded-lg">
            <FaUserTag className="text-blue-600" />
            <span className="font-medium">{user?.role || "Member"}</span>
          </div>

          {/* Joined Date */}
          <div className="flex items-center gap-3 bg-green-100 p-2 rounded-lg">
            <FaCalendarAlt className="text-green-600" />
            <span className="font-medium">
              Joined: {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
            </span>
          </div>

          {/* Bio */}
          {user?.bio && (
            <div className="mt-4 bg-blue-100 p-3 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">About Me</h3>
              <p className="text-gray-600 italic">{user.bio}</p>
            </div>
          )}
        </div>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Logout
        </button>

      </div>
    </div>
  );
};

export default Profile;
