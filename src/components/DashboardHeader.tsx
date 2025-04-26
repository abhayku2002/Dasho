
import React from 'react';
import { Search, Filter, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center flex-1 max-w-xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search customer..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="outline" className="flex items-center">
          <Filter className="w-4 h-4 mr-2" />
          Sort by
        </Button>
        <Button variant="outline" className="flex items-center">
          Filters
        </Button>
        <Button className="flex items-center bg-black text-white hover:bg-gray-800">
          <Plus className="w-4 h-4 mr-2" />
          Add customer
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
