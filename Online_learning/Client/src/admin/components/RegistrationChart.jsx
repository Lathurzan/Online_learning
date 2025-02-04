// RegistrationChart.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RegistrationChart = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user registration stats from your backend API endpoint
    axios.get('/api/userStats')
      .then(response => {
        // Assuming the response is structured like:
        // { labels: ['Jan', 'Feb', 'Mar', ...], counts: [5, 10, 15, ...] }
        const { labels, counts } = response.data;
        setChartData({
          labels,
          datasets: [
            {
              label: 'User Registrations',
              data: counts,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
          ],
        });
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching registration data', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading chart...</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">User Registrations Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default RegistrationChart;
