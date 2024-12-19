import React from 'react';
import { BarChart, Users, TrendingUp, Clock } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  trend?: string;
  trendUp?: boolean;
}

function StatCard({ title, value, icon: Icon, trend, trendUp }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
        </div>
        <div className="p-3 bg-blue-50 rounded-full">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
      </div>
      {trend && (
        <div className="mt-4 flex items-center">
          <TrendingUp className={`h-4 w-4 ${trendUp ? 'text-green-500' : 'text-red-500'}`} />
          <span className={`ml-2 text-sm ${trendUp ? 'text-green-500' : 'text-red-500'}`}>
            {trend}
          </span>
        </div>
      )}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Employees"
          value="156"
          icon={Users}
          trend="+12% from last month"
          trendUp={true}
        />
        <StatCard
          title="Active Projects"
          value="23"
          icon={BarChart}
          trend="+5% from last month"
          trendUp={true}
        />
        <StatCard
          title="Hours Logged"
          value="1,234"
          icon={Clock}
          trend="-2% from last month"
          trendUp={false}
        />
        <StatCard
          title="Departments"
          value="8"
          icon={Users}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">New employee onboarded</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Department Overview</h2>
          <div className="space-y-4">
            {['Engineering', 'Marketing', 'Sales', 'HR'].map((dept) => (
              <div key={dept} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-900">{dept}</span>
                <span className="text-sm text-gray-500">32 employees</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}