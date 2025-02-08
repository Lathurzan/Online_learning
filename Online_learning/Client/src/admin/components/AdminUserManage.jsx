import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const AdminUserManage = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [newUser, setNewUser] = useState({ firstName: '', sureName: '', email: '', username: '', age: '', gender: '', district: '' });
  const [userGrowth, setUserGrowth] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className="p-8 font-sans">
    <h1 className="text-3xl font-bold mb-6">Admin User Management</h1>

    {/* User Growth Chart */}
    <div className="mb-8 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">User Growth</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={userGrowth}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#4F46E5" />
        </BarChart>
      </ResponsiveContainer>
    </div>

    {/* User Table */}
    <div className="mb-8 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Username</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border-b">
              <td className="p-4">{user.firstName} {user.sureName}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">{user.username}</td>
              <td className="p-4">
                <button
                  onClick={() => handleEdit(user)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg mr-2 hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Edit Modal */}
    {showModal && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-semibold mb-4">Edit User</h2>
          <div className="mb-4">
            <input
              type="text"
              value={currentUser.firstName}
              onChange={(e) => setCurrentUser({ ...currentUser, firstName: e.target.value })}
              className="p-2 border border-gray-300 rounded-lg mb-4 w-full"
            />
            <input
              type="email"
              value={currentUser.email}
              onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
              className="p-2 border border-gray-300 rounded-lg mb-4 w-full"
            />
          </div>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 mr-4"
          >
            Save
          </button>
          <button
            onClick={() => setShowModal(false)}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    )}
  </div>
);
};

export default AdminUserManage;
