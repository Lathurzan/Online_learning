import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, BookOpen, BarChart2, Settings } from "lucide-react";

const AdminSidebar = () => {
  // This function applies a blue background and white text to active links,
  // and sets a hover effect for inactive links.
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md font-bold"
      : "flex items-center space-x-2 px-4 py-2 text-white hover:bg-blue-600 hover:text-white rounded-md";

  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-4 fixed">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-2">
        <li>
          <NavLink to="/adminpanel" className={navLinkClass}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/adminusermanage" className={navLinkClass}>
            <Users size={20} />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admincourse" className={navLinkClass}>
            <BookOpen size={20} />
            <span>Courses</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/adminanalisys" className={navLinkClass}>
            <BarChart2 size={20} />
            <span>Analytics</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/adminsetting" className={navLinkClass}>
            <Settings size={20} />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
