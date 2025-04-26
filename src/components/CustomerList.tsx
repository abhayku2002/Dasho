
import React from 'react';
import { MoreVertical } from 'lucide-react';

const CustomerCard = ({ 
  company, 
  description, 
  date, 
  views, 
  comments 
}: { 
  company: string; 
  description: string; 
  date: string; 
  views: number; 
  comments: number; 
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-lg font-semibold">{company}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
      <button className="text-gray-400 hover:text-gray-600">
        <MoreVertical className="w-5 h-5" />
      </button>
    </div>
    <div className="flex items-center text-sm text-gray-500 space-x-4">
      <span>{date}</span>
      <span>👁 {views}</span>
      <span>💬 {comments}</span>
    </div>
  </div>
);

const CustomerList = () => {
  const customers = [
    {
      company: "ByteBridge",
      description: "Corporate and personal data protection on a turnkey basis",
      date: "18 Apr",
      views: 2,
      comments: 1,
    },
    {
      company: "SkillUp Hub",
      description: "Platform for professional development of specialists",
      date: "09 Mar",
      views: 4,
      comments: 1,
    },
    {
      company: "FitLife Nutrition",
      description: "Nutritious food and nutraceuticals for individuals",
      date: "10 Mar",
      views: 1,
      comments: 3,
    },
    {
      company: "CloudSphere",
      description: "Cloud services for data storage and processing",
      date: "24 Mar",
      views: 2,
      comments: 1,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {customers.map((customer, index) => (
        <CustomerCard key={index} {...customer} />
      ))}
    </div>
  );
};

export default CustomerList;
