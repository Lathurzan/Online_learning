import { useState } from "react";

export default function IELTSCalculator({ onClose }) {
  const [scores, setScores] = useState({
    listening: "",
    reading: "",
    writing: "",
    speaking: "",
  });
  const [average, setAverage] = useState(null);

  const handleChange = (e) => {
    setScores({ ...scores, [e.target.name]: e.target.value });
  };

  const calculateScore = () => {
    const { listening, reading, writing, speaking } = scores;
    const values = [listening, reading, writing, speaking].map(Number);
    if (values.some(isNaN) || values.some((val) => val < 0 || val > 9)) {
      setAverage("Invalid scores");
      return;
    }
    const avg = values.reduce((a, b) => a + b, 0) / values.length;
    setAverage((Math.round(avg * 2) / 2).toFixed(1));
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl shadow-lg mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-center">IELTS Band Score Calculator</h2>
        <button
          onClick={onClose}
          className="text-white text-2xl font-semibold hover:text-gray-300"
        >
          ×
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {["listening", "reading", "writing", "speaking"].map((field) => (
          <div key={field} className="flex flex-col items-center">
            <label className="text-lg font-semibold capitalize">{field}</label>
            <input
              type="number"
              name={field}
              value={scores[field]}
              onChange={handleChange}
              placeholder="0 - 9"
              className="w-full p-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-center"
              min="0"
              max="9"
              step="0.5"
            />
          </div>
        ))}
      </div>
      <button
        onClick={calculateScore}
        className="w-full p-3 mt-6 bg-blue-700 hover:bg-blue-800 rounded-lg font-semibold"
      >
        Calculate
      </button>
      {average !== null && (
        <div className="mt-6 p-4 bg-white text-black rounded-lg text-center">
          <p className="text-xl font-bold">Average Band Score:</p>
          <span className="text-2xl font-extrabold text-blue-600">{average}</span>
        </div>
      )}
    </div>
  );
}
