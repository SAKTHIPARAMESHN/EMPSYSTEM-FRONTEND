import React from 'react';
import { Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MenuItem {
  icon: React.ElementType;
  label: string;
  href: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
  currentPath: string;
}

export default function Sidebar({ menuItems, currentPath }: SidebarProps) {
  return (
    <div className="fixed inset-y-0 left-0 z-50 w-72 bg-gray-900">
      <div className="flex h-16 items-center gap-2 px-6">
        <Users className="h-8 w-8 text-white" />
        <span className="text-xl font-bold text-white">EMS</span>
      </div>
      <nav className="mt-6">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white ${
                  currentPath === item.href ? 'bg-gray-800 text-white' : ''
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}