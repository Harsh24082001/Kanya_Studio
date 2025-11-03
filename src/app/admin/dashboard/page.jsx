'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaUsers, FaAddressBook, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const Dashboard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Stats data for dashboard cards

const stats = [
  { title: 'Users', icon: <FaUsers size={30} color="#4A5568" /> },
  { title: 'Contacts Details', icon: <FaAddressBook size={30} color="#4A5568" /> },
  { title: 'Email Details', icon: <FaEnvelope size={30} color="#4A5568" /> },
  { title: 'All Detail', icon: <FaFileAlt size={30} color="#4A5568" /> },
];


  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    if (!isAuth) {
      router.replace('/admin');
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    router.replace('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md px-4 py-5 flex justify-between items-center">
        <h1 className="flex items-center justify-center text-2xl font-bold text-gray-800 font-serif ml-20">Dashboard</h1>
        <button onClick={handleLogout} className="bg-black hover:bg-black/80 text-white px-4 py-2 rounded transition">Logout </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.title} className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="text-4xl">{stat.icon}</div>
              <div>
                <p className="text-gray-500">{stat.title}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Example Table: Recent Orders */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recently Users</h2>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border-b px-4 py-2 text-left">Order ID</th>
                <th className="border-b px-4 py-2 text-left">Customer</th>
                <th className="border-b px-4 py-2 text-left">Amount</th>
                <th className="border-b px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
