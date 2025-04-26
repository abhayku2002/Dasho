
import React from 'react';
import { ArrowDown } from 'lucide-react';

const StageCard = ({ title, count }: { title: string; count: number }) => (
  <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
    <h3 className="font-medium">{title}</h3>
    <div className="flex items-center">
      <span className="text-sm text-gray-500">{count}</span>
      <ArrowDown className="w-4 h-4 text-gray-400 ml-1" />
    </div>
  </div>
);

const DealStages = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <StageCard title="Contacted" count={12} />
      <StageCard title="Negotiation" count={17} />
      <StageCard title="Offer Sent" count={13} />
      <StageCard title="Deal Closed" count={12} />
    </div>
  );
};

export default DealStages;
