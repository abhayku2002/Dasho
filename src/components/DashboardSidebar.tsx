
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Activity, 
  Users, 
  Settings,
  ChevronDown
} from 'lucide-react';

const SidebarLink = ({ icon: Icon, text, count, to }: { icon: any, text: string, count?: number, to: string }) => (
  <Link to={to} className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
    <Icon className="w-5 h-5 mr-3" />
    <span className="flex-1">{text}</span>
    {count !== undefined && (
      <span className="bg-gray-700 text-xs px-2 py-1 rounded-full">{count}</span>
    )}
  </Link>
);

const DashboardSidebar = () => {
  return (
    <div className="w-64 bg-gray-900 h-screen p-4 flex flex-col">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-white">BizLink</h1>
      </div>

      <nav className="flex-1 space-y-2">
        <SidebarLink icon={LayoutDashboard} text="Dashboard" to="/" />
        <SidebarLink icon={CheckSquare} text="Tasks" to="/tasks" count={2} />
        <SidebarLink icon={Activity} text="Activity" to="/activity" />
        <SidebarLink icon={Users} text="Customers" to="/customers" />
        <SidebarLink icon={Settings} text="Settings" to="/settings" />
      </nav>

      <div className="border-t border-gray-800 pt-4">
        <div className="px-4">
          <h3 className="text-sm font-medium text-gray-400 mb-2">Projects</h3>
          <div className="space-y-2">
            <div className="flex items-center text-gray-300">
              <span className="flex-1">BizConnect</span>
              <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">7</span>
              <ChevronDown className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
