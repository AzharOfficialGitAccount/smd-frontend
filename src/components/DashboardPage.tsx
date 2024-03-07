import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { signInSuccess, signInFailure } from '../redux/user/userSlice';

const DashboardPage: React.FC = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const [dashboardData, setDashboardData] = useState<any>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('Token not found in local storage');
          return;
        }

        const response = await fetch('http://localhost:2024/api/v1/user/dashboard', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        console.log("Data:", data);
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <div className="border border-gray-300 p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-2">User Information</h2>
        {currentUser && (
          <>
            <p><strong>Username:</strong> {currentUser.username}</p>
            <p><strong>Email:</strong> {currentUser.email}</p>
            <p><strong>Phone:</strong> {currentUser.phone}</p>
            <p><strong>Profile Pic:</strong> {currentUser.profilePic}</p>
          </>
        )}
      </div>
      {dashboardData && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Dashboard Data</h2>
          {/* Display dashboard data here */}
        </div>
      )}
      <Link to="/signin" className="mt-4 text-blue-500 hover:underline">
        Sign Out
      </Link>
    </div>
  );
};

export default DashboardPage;
