import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <div className="border border-gray-300 p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-2">User Information</h2>
        <p><strong>Username:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Phone:</strong> +1234567890</p>
      </div>
      <Link to="/signin" className="mt-4 text-blue-500 hover:underline">
        Sign Out
      </Link>
    </div>
  );
};

export default DashboardPage;
