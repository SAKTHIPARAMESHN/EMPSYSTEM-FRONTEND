import React from 'react';
import { Layout, Menu, Users, UserPlus, BarChart2, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const menuItems = [
  { icon: Layout, label: 'Dashboard', href: '/' },
  { icon: Users, label: 'Employees', href: '/employees' },
  { icon: UserPlus, label: 'Add Employee', href: '/employees/add' },
  { icon: BarChart2, label: 'Reports', href: '/reports' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar menuItems={menuItems} currentPath={location.pathname} />
      <div className="lg:pl-72">
        <Header />
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}