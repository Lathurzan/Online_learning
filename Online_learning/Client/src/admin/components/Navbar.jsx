import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Settings,
  Bell,
  Search,
  User,
  BarChart,
  FileText,
  Menu,
  X,
  Shield
} from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems = [
    { icon: <LayoutDashboard className="h-5 w-5" />, text: 'Dashboard' },
    { icon: <Users className="h-5 w-5" />, text: 'Users' },
    { icon: <BookOpen className="h-5 w-5" />, text: 'Courses' },
    { icon: <BarChart className="h-5 w-5" />, text: 'Analytics' },
    { icon: <FileText className="h-5 w-5" />, text: 'Reports' },
    { icon: <Settings className="h-5 w-5" />, text: 'Settings' },
  ];

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center">
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

            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-4">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.icon}
                  <span className="ml-1">{item.text}</span>
                </button>
              ))}
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
              <hr className="my-2 border-gray-600" />
              <button className="flex items-center space-x-2 w-full px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">
                <Bell className="h-5 w-5" />
                <span>Notifications</span>
              </button>
              <button className="flex items-center space-x-2 w-full px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;