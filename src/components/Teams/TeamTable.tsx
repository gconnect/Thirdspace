import React from 'react';

const TeamTable = () => {
  return (
    <><div className=" min-w-full bg-gray-900 p-3 mb-4">
      Number of Teams: <span className="text-green-800">4</span> <span className="ml-4">Roles assigned:<span className="text-green-900">2</span></span>
      </div>
      
       {/* Row with 3 items */}
      <div className="flex items-center justify-between mb-4">
        {/* Filter Icon */}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {/* Include the path for your Filter icon */}
          </svg>
          <span>Filter</span>
        </div>

        {/* Dropdown 1: All Roles */}
        <div className="relative">
          <select className="block appearance-none border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>All Roles</option>
            {/* Add other role options here */}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {/* Include the path for your dropdown icon */}
            </svg>
          </div>
        </div>

        {/* Dropdown 2: All Departments */}
        <div className="relative">
          <select className="block appearance-none border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>All Departments</option>
            {/* Add other department options here */}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {/* Include the path for your dropdown icon */}
            </svg>
          </div>
        </div>
      </div>

      <table className=" min-w-full divide-y divide-gray-200">
        <thead className="text-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 tracking-wider">
              Team Member
            </th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 tracking-wider">
              Department
            </th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 tracking-wider">
              Roles
            </th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 tracking-wider">
              Remove
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Rows go here */}
        </tbody>
      </table></>
  );
};

export default TeamTable;
