
import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardHeader from '../components/DashboardHeader';
import CustomerStats from '../components/CustomerStats';
import DealStages from '../components/DealStages';
import CustomerList from '../components/CustomerList';

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <DashboardSidebar />
      <div className="flex-1">
        <DashboardHeader />
        <main className="p-6">
          <CustomerStats />
          <DealStages />
          <CustomerList />
        </main>
      </div>
    </div>
  );
};

export default Index;
