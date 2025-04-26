
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CustomerStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col h-40">
          <h3 className="text-lg font-semibold mb-4">New customers</h3>
          <div className="flex-1 flex items-end">
            <div className="w-full h-32">
              {/* Bar chart placeholder */}
              <div className="flex items-end justify-between h-full">
                {[6, 8, 5, 7, 4, 9].map((height, i) => (
                  <div
                    key={i}
                    className="w-8 bg-gray-800 rounded-t"
                    style={{ height: `${height * 10}%` }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col h-40">
          <h3 className="text-lg font-semibold mb-4">Successful deals</h3>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative">
              <svg className="w-32 h-32">
                <circle
                  className="text-gray-200"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="56"
                  cx="64"
                  cy="64"
                />
                <circle
                  className="text-blue-600"
                  strokeWidth="10"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="56"
                  cx="64"
                  cy="64"
                  strokeDasharray="352"
                  strokeDashoffset="105"
                />
              </svg>
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                68%
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col h-40">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Tasks in progress</h3>
              <p className="text-3xl font-bold mt-2">53</p>
            </div>
            <ArrowRight className="w-6 h-6" />
          </div>
          <div className="flex items-center justify-between mt-auto">
            <div>
              <h3 className="text-lg font-semibold">Prepayments</h3>
              <p className="text-3xl font-bold mt-2">$15,890</p>
            </div>
            <ArrowRight className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerStats;
