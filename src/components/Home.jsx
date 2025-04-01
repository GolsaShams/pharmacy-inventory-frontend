import React from "react";
import LineChartComponent from "./LineChartComponent";
import { formatDateWithTimezone } from '../utils';

const Home = () => {
  // Example usage:
  const currentDate = new Date();
  const timeZone = 'America/New_York'; // Replace with your desired timezone
  const formattedDate = formatDateWithTimezone(currentDate, timeZone);

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Welcome back, John!</h2>
        <p className="text-gray-500">{formattedDate}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-yellow-100 text-yellow-900 p-4 rounded shadow">
          <p className="text-sm">Patients</p>
          <p className="text-xl font-bold">3,807</p>
          <p className="text-xs">↑ 13% from last month</p>
        </div>
        <div className="bg-red-100 text-red-900 p-4 rounded shadow">
          <p className="text-sm">Prescriptions</p>
          <p className="text-xl font-bold">8,765</p>
          <p className="text-xs">↑ 17% from last month</p>
        </div>
        <div className="bg-green-100 text-green-900 p-4 rounded shadow">
          <p className="text-sm">Appointments</p>
          <p className="text-xl font-bold">321</p>
          <p className="text-xs">↓ 12% from last month</p>
        </div>
        <div className="bg-blue-100 text-blue-900 p-4 rounded shadow">
          <p className="text-sm">Revenue</p>
          <p className="text-xl font-bold">$50,786</p>
          <p className="text-xs">↑ 21% from last month</p>
        </div>
      </div>

      {/* Expiring Medicines */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Expiring Soon</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex justify-between">
            <span>Amoxicillin</span>
            <span className="text-red-600 font-medium">Apr 5, 2025</span>
          </li>
          <li className="flex justify-between">
            <span>Ibuprofen</span>
            <span className="text-red-600 font-medium">Apr 8, 2025</span>
          </li>
          <li className="flex justify-between">
            <span>Paracetamol</span>
            <span className="text-red-600 font-medium">Apr 12, 2025</span>
          </li>
        </ul>
      </div>

      {/* Recent Messages */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Messages</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>📩 Dr. Ahmad confirmed your order #00123</li>
          <li>📩 New supplier request from MedSupply Inc.</li>
          <li>📩 Reminder: Monthly report due next week</li>
        </ul>
      </div>

      {/* Monthly Orders Chart */}
      <LineChartComponent />
    </div>
  );
};

export default Home;
