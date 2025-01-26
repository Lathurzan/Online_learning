import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Settings,
  Bell,
  Search,
  User,
  BarChart2,
  DollarSign,
  UserPlus,
  BookOpenCheck,
  TrendingUp,
  Menu,
  X,
  Shield,
} from "lucide-react";

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    { icon: <LayoutDashboard className="h-5 w-5" />, text: "Dashboard" },
    { icon: <Users className="h-5 w-5" />, text: "Users" },
    { icon: <BookOpen className="h-5 w-5" />, text: "Courses" },
    { icon: <BarChart2 className="h-5 w-5" />, text: "Analytics" },
    { icon: <Settings className="h-5 w-5" />, text: "Settings" },
  ];

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold">Admin Portal</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 rounded-lg bg-gray-700 border-transparent focus:outline-none focus:bg-white focus:text-gray-900"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <button className="relative text-gray-300 hover:text-white">
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  2
                </span>
              </button>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-white">
                <User className="h-6 w-6" />
                <span className="hidden lg:inline">Admin</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900"
                />
                <Search className="h-5 w-5 text-gray-400 absolute left-7 top-24" />
              </div>
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className="flex items-center space-x-2 w-full px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Sidebar Component
const Sidebar = ({ isOpen }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, title: "Dashboard" },
    { icon: <Users size={20} />, title: "Users" },
    { icon: <BookOpen size={20} />, title: "Courses" },
    { icon: <BarChart2 size={20} />, title: "Analytics" },
    { icon: <Settings size={20} />, title: "Settings" },
  ];

  return (
    <div
      className={`h-screen bg-gray-800 text-white w-64 fixed left-0 top-16 transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="p-4">
        {menuItems.map((item) => (
          <button
            key={item.title}
            onClick={() => setActiveItem(item.title)}
            className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
              activeItem === item.title ? "bg-blue-600" : "hover:bg-gray-700"
            }`}
          >
            {item.icon}
            <span>{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ icon, title, value, trend }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-2xl font-bold mt-2">{value}</h3>
        <p
          className={`text-sm mt-2 ${
            trend >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {trend >= 0 ? "↑" : "↓"} {Math.abs(trend)}% from last month
        </p>
      </div>
      <div className="bg-blue-100 p-3 rounded-full">{icon}</div>
    </div>
  </div>
);

// Recent Activity Component
const RecentActivity = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
    <div className="space-y-4">
      {[
        { user: "John Doe", action: "enrolled in React Course", time: "2 hours ago" },
        { user: "Jane Smith", action: "completed Python Basics", time: "3 hours ago" },
        { user: "Mike Johnson", action: "started JavaScript Course", time: "5 hours ago" },
      ].map((activity, index) => (
        <div key={index} className="flex items-center justify-between border-b pb-2">
          <div>
            <p className="font-medium">{activity.user}</p>
            <p className="text-sm text-gray-500">{activity.action}</p>
          </div>
          <span className="text-xs text-gray-400">{activity.time}</span>
        </div>
      ))}
    </div>
  </div>
);

// Admin Panel Component
function AdminPanel() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Sidebar isOpen={sidebarOpen} />

      {/* Main Content */}
      <div className="md:ml-64 pt-16 p-6">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard
            icon={<Users className="text-blue-600" size={24} />}
            title="Total Users"
            value="1,234"
            trend={12}
          />
          <StatCard
            icon={<BookOpenCheck className="text-blue-600" size={24} />}
            title="Active Courses"
            value="45"
            trend={8}
          />
          <StatCard
            icon={<DollarSign className="text-blue-600" size={24} />}
            title="Revenue"
            value="$12,345"
            trend={-5}
          />
          <StatCard
            icon={<TrendingUp className="text-blue-600" size={24} />}
            title="User Growth"
            value="23%"
            trend={15}
          />
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Course Overview</h2>
            <div className="space-y-4">
              {[
                { name: "React Fundamentals", students: 234, progress: 75 },
                { name: "Python for Beginners", students: 189, progress: 60 },
                { name: "JavaScript Advanced", students: 156, progress: 45 },
              ].map((course, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{course.name}</span>
                    <span className="text-gray-500">{course.students} students</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 rounded-full h-2"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
