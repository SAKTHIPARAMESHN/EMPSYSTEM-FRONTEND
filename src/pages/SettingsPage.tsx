import React from 'react';
import { Bell, Lock, User, Building, Mail } from 'lucide-react';

interface SettingsSectionProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

function SettingsSection({ title, icon: Icon, children }: SettingsSectionProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="h-5 w-5 text-gray-500" />
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

      <div className="space-y-6">
        <SettingsSection title="Company Information" icon={Building}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                defaultValue="CIT Inc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Industry</label>
              <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2">
                <option>Technology</option>
                <option>Healthcare</option>
                <option>Finance</option>
              </select>
            </div>
          </div>
        </SettingsSection>

        <SettingsSection title="Notifications" icon={Bell}>
          <div className="space-y-4">
            {[
              'Email notifications for new employees',
              'Weekly report summaries',
              'System updates',
            ].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{item}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </SettingsSection>

        <SettingsSection title="Security" icon={Lock}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Password Requirements</label>
              <div className="mt-2 space-y-2 text-sm text-gray-500">
                <p>✓ Minimum 8 characters</p>
                <p>✓ At least one uppercase letter</p>
                <p>✓ At least one number</p>
                <p>✓ At least one special character</p>
              </div>
            </div>
            <div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Change Password
              </button>
            </div>
          </div>
        </SettingsSection>
      </div>
    </div>
  );
}