"use client"
import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Budget {
  id: string;
  category: string;
  totalBudget: number;
  totalSpend: number;
}

const Dashboard: NextPage = () => {
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpend, setTotalSpend] = useState(0);
  const [budgets, setBudgets] = useState<Budget[]>([]);

  useEffect(() => {
    // Simulate fetching data (replace with your actual API call)
    const fetchBudgets = async () => {
      // Example data tailored for construction workers:
      const mockBudgets: Budget[] = [
        { id: '1', category: 'Tools & Equipment', totalBudget: 12000, totalSpend: 4500 },
        { id: '2', category: 'Labor Costs', totalBudget: 25000, totalSpend: 20000 },
        { id: '3', category: 'Materials', totalBudget: 15000, totalSpend: 9500 },
        { id: '4', category: 'Safety Gear', totalBudget: 3000, totalSpend: 1000 },
        { id: '5', category: 'Project Overhead', totalBudget: 5000, totalSpend: 3500 },
      ];

      setBudgets(mockBudgets);
    };

    fetchBudgets();
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    // Calculate totals whenever budgets change
    let calculatedTotalBudget = 0;
    let calculatedTotalSpend = 0;

    budgets.forEach((budget) => {
      calculatedTotalBudget += budget.totalBudget;
      calculatedTotalSpend += budget.totalSpend;
    });

    setTotalBudget(calculatedTotalBudget);
    setTotalSpend(calculatedTotalSpend);
  }, [budgets]);

  const chartData = {
    labels: budgets.map((budget) => budget.category),
    datasets: [
      {
        label: 'Total Budget',
        data: budgets.map((budget) => budget.totalBudget),
        backgroundColor: '#e0e0e0', // Light gray
      },
      {
        label: 'Total Spend',
        data: budgets.map((budget) => budget.totalSpend),
        backgroundColor: '#2D9A03', // Indigo
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Construction Budget Overview',
      },
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Construction Budget Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-lg font-semibold text-black">Total Budget</p>
          <p className="text-2xl text-black">${totalBudget.toLocaleString()}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-lg font-semibold text-black">Total Spend</p>
          <p className="text-2xl text-red-500">${totalSpend.toLocaleString()}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-lg font-semibold text-black">No. Of Budget Categories</p>
          <p className="text-2xl text-black">{budgets.length}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mt-4">
        <Bar options={chartOptions} data={chartData} />
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Added grid */}
        {budgets.map((budget) => (
          <div key={budget.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-black">{budget.category}</h2>
            <p className="text-black">{budget.totalSpend.toLocaleString()} Spend</p>
            <p className="text-black">${(budget.totalBudget - budget.totalSpend).toLocaleString()} Remaining</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;