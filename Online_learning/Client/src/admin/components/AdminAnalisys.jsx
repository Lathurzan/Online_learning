import React, { useState } from "react";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";

export default function AdminAnalisys() {
  const [courses, setCourses] = useState([
    { id: 1, name: "IELTS", description: "General IELTS course" },
    { id: 2, name: "UKVI", description: "UK Visas and Immigration preparation" },
    { id: 3, name: "A1", description: "A1 level course for beginners" },
    { id: 4, name: "A2", description: "A2 level course for elementary learners" },
    { id: 5, name: "B1", description: "B1 level course for intermediate learners" },
  ]);

  const [newCourse, setNewCourse] = useState({ name: "", description: "" });

  // Add New Course
  const handleAddCourse = (e) => {
    e.preventDefault();
    const newId = courses.length ? courses[courses.length - 1].id + 1 : 1;
    setCourses([...courses, { id: newId, ...newCourse }]);
    setNewCourse({ name: "", description: "" });
  };

  // Delete Course
  const handleDeleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  // Edit Course Placeholder
  const handleEditCourse = (id) => {
    alert(`Edit functionality for course ID: ${id} to be implemented.`);
  };

  // Mock Data for Chart
  const userStats = {
    labels: ["IELTS", "UKVI", "A1", "A2", "B1"],
    datasets: [
      {
        label: "Users Enrolled",
        data: [120, 90, 50, 40, 70],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </header>

      <main className="p-8 space-y-8">
        {/* Add Course Section */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Add New Course</h2>
          <form onSubmit={handleAddCourse} className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Course Name"
              className="p-2 border border-gray-300 rounded-lg"
              value={newCourse.name}
              onChange={(e) =>
                setNewCourse({ ...newCourse, name: e.target.value })
              }
              required
            />
            <textarea
              placeholder="Course Description"
              className="p-2 border border-gray-300 rounded-lg"
              rows="3"
              value={newCourse.description}
              onChange={(e) =>
                setNewCourse({ ...newCourse, description: e.target.value })
              }
              required
            ></textarea>
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add Course
            </button>
          </form>
        </section>

        {/* Course List Section */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Course List</h2>
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
                  <td className="p-4 space-x-2">
                    <button
                      className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                      onClick={() => handleEditCourse(course.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      onClick={() => handleDeleteCourse(course.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* User Statistics Section */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">User Statistics</h2>
          <Chart
            type="bar"
            data={userStats}
            className="max-w-3xl mx-auto"
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>Admin Dashboard © 2025</p>
      </footer>
    </div>
  );
}
