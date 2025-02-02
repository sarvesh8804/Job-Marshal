// pages/income-tracker.tsx
"use client"
import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';

interface IncomeEntry {
  id: string;
  employer: string;
  date: string;
  amount: number;
  rating: number | null; // Add rating field
}

const IncomeTracker: NextPage = () => {
  const [incomeEntries, setIncomeEntries] = useState<IncomeEntry[]>([]);
  const [newEntry, setNewEntry] = useState<Omit<IncomeEntry, 'id' | 'rating'>>({
    employer: '',
    date: '',
    amount: 0,
  });
  const [employers, setEmployers] = useState<string[]>([]); // Store unique employers

  useEffect(() => {
    // Simulate fetching income entries (replace with your actual API call)
    const fetchIncomeEntries = async () => {
      const mockIncomeEntries: IncomeEntry[] = [
        { id: '1', employer: 'Acme Corp', date: '2024-07-26', amount: 1500, rating: 4 },
        { id: '2', employer: 'Beta Industries', date: '2024-07-20', amount: 2000, rating: 5 },
        { id: '3', employer: 'Acme Corp', date: '2024-07-15', amount: 1200, rating: 3 },
      ];
      setIncomeEntries(mockIncomeEntries);
    };

    fetchIncomeEntries();
  }, []);

  useEffect(() => {
      // Update unique employers whenever incomeEntries change
      const uniqueEmployers = [...new Set(incomeEntries.map(entry => entry.employer))];
      setEmployers(uniqueEmployers);
  }, [incomeEntries]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewEntry({
      ...newEntry,
      [e.target.name]: e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value,
    });
  };

  const handleAddEntry = () => {
    const newIncomeEntry: IncomeEntry = {
      id: Date.now().toString(),
      ...newEntry,
      rating: null, // Initially no rating
    };

    setIncomeEntries([newIncomeEntry, ...incomeEntries]);
    setNewEntry({ employer: '', date: '', amount: 0 }); // Clear form
  };

  const handleRatingChange = (id: string, rating: number) => {
    setIncomeEntries(
      incomeEntries.map((entry) =>
        entry.id === id ? { ...entry, rating: rating } : entry
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-black">Income Tracker</h1>

      {/* Add Income Entry Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-4 text-black">
        <h2 className="text-xl font-semibold mb-2 text-black">Add Income Entry</h2>
        <input
          type="text"
          name="employer"
          placeholder="Employer"
          value={newEntry.employer}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2"
          list="employerOptions" // Add list attribute
          required
        />
        <datalist id="employerOptions"> {/* Datalist for Employer suggestions */}
          {employers.map((employer) => (
            <option key={employer} value={employer} />
          ))}
        </datalist>
        <input
          type="date"
          name="date"
          value={newEntry.date}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2"
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={newEntry.amount}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2"
          required
        />
        <button
          onClick={handleAddEntry}
          className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
        >
          Add Entry
        </button>
      </div>

      {/* Income History */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-2 text-black">Income History</h2>
        <table className="min-w-full divide-y divide-gray-200 text-black">
          <thead>
            <tr>
              <th className="px-4 py-2 text-black">Employer</th>
              <th className="px-4 py-2" text-black>Date</th>
              <th className="px-4 py-2" text-black>Amount</th>
              <th className="px-4 py-2" text-black>Rating</th> {/* Add rating header */}
            </tr>
          </thead>
          <tbody>
            {incomeEntries.map((entry) => (
              <tr key={entry.id}>
                <td className="px-4 py-2 text-black">{entry.employer}</td>
                <td className="px-4 py-2 text-black">{entry.date}</td>
                <td className="px-4 py-2 text-black">${entry.amount}</td>
                <td className="px-4 py-2 text-black">
                  {/* Rating stars */}
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => handleRatingChange(entry.id, star)}
                      className={`cursor-pointer ${entry.rating && star <= entry.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                    >
                      ★
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IncomeTracker;