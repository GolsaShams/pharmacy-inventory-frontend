import React, { createContext } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  console.log(location.pathname);

  const menuClass = "hover:bg-purple-600 p-2 rounded";
  const activePage = "bg-white text-purple-700 p-2 rounded font-semibold"

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-purple-700 text-white p-6 space-y-6">
        <h1 className="text-2xl font-bold mb-8">eHospital</h1>
        <nav className="flex flex-col gap-4">
          <a
            href="/"
            className={location.pathname === '/' ? activePage : menuClass}
          >
            Dashboard
          </a>
          <a
            href="/inventory"
            className={location.pathname === '/inventory' ? activePage : menuClass}
          >
            Inventory
          </a>
          <a
            href="/prescriptions"
            className={
              location.pathname === '/prescriptions' ? activePage : menuClass
            }
          >
            Prescriptions
          </a>
        </nav>
        <div className="absolute bottom-10 left-6 flex flex-col gap-2">
          <a href="#" className="hover:bg-purple-600 p-2 rounded">
            Log out
          </a>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 flex-1 p-10">
        <Outlet /> {/* This renders Home or Dashboard */}
      </main>
    </div>
  );
};

export default Layout;
