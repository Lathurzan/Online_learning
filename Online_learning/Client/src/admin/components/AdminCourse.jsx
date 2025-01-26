import React, { useState } from "react";

const AdminCourse = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: "IELTS", description: "International English Language Testing System" },
    { id: 2, name: "UKVI", description: "UK Visa and Immigration" },
    { id: 3, name: "A1", description: "Basic English Level A1" },
    { id: 4, name: "A2", description: "Elementary English Level A2" },
    { id: 5, name: "B1", description: "Intermediate English Level B1" },
  ]);

  const [newCourse, setNewCourse] = useState({ name: "", description: "" });
  const [editingCourse, setEditingCourse] = useState(null);

  const handleAddCourse = () => {
    if (newCourse.name && newCourse.description) {
      const newId = courses.length ? courses[courses.length - 1].id + 1 : 1;
      setCourses([...courses, { id: newId, ...newCourse }]);
      setNewCourse({ name: "", description: "" });
    }
  };

  const handleEditCourse = () => {
    setCourses(
      courses.map((course) =>
        course.id === editingCourse.id ? editingCourse : course
      )
    );
    setEditingCourse(null);
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div className="p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6">Course Admin Page</h1>

      {/* Add Course Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Course</h2>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Course Name"
            value={newCourse.name}
            onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
            className="p-2 border border-gray-300 rounded-lg flex-1"
          />
          <input
            type="text"
            placeholder="Course Description"
            value={newCourse.description}
            onChange={(e) =>
              setNewCourse({ ...newCourse, description: e.target.value })
            }
            className="p-2 border border-gray-300 rounded-lg flex-1"
          />
          <button
            onClick={handleAddCourse}
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add Course
          </button>
        </div>
      </div>

      {/* Course List */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Course List</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Course Name</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="border-b">
                <td className="p-4">{course.id}</td>
                <td className="p-4">{course.name}</td>
                <td className="p-4">{course.description}</td>
                <td className="p-4">
                  <button
                    onClick={() => setEditingCourse(course)}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg mr-2 hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteCourse(course.id)}
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

      {/* Edit Course Modal */}
      {editingCourse && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Edit Course</h2>
            <div className="mb-4">
              <input
                type="text"
                value={editingCourse.name}
                onChange={(e) =>
                  setEditingCourse({ ...editingCourse, name: e.target.value })
                }
                className="p-2 border border-gray-300 rounded-lg mb-4 w-full"
              />
              <input
                type="text"
                value={editingCourse.description}
                onChange={(e) =>
                  setEditingCourse({ ...editingCourse, description: e.target.value })
                }
                className="p-2 border border-gray-300 rounded-lg mb-4 w-full"
              />
            </div>
            <button
              onClick={handleEditCourse}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 mr-4"
            >
              Save
            </button>
            <button
              onClick={() => setEditingCourse(null)}
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

export default AdminCourse;
