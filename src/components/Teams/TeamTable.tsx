import { profileImage } from '@/assets';
import Link from 'next/link';
import Image from "next/image";
import React from 'react';
import { BiCaretDown, BiFilterAlt } from "react-icons/bi";

type Props = {};

const TeamTable = (props: Props) => {
  return (
    <><div className=" min-w-full bg-gray-900 p-3 mb-4">
      Number of Teams: <span className="text-green-800">4</span> <span className="ml-4">Roles assigned:<span className="text-green-900">2</span></span>
      </div>
      
       {/* Row with 3 items */}
      <div className="flex items-center mb-4">
        {/* Filter Icon */}
        <div className="flex items-center mr-5">
          <BiFilterAlt className="w-6 h-6 ml-6" />
          <span>Filter</span>
        </div>

        {/* Dropdown 1: All Roles */}
        <div className="relative">
          <select className="block bg-black appearance-none border border-solid border-outline-gray-900 text-gray-200 py-2 px-4 pr-8 leading-tight ">
            <option>All Roles</option>
            <option>All Roles</option>
            <option>All Roles</option>
            <option>All Roles</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <BiCaretDown className="w-6 h-6 ml-6" />
          </div>
        </div>

        {/* Dropdown 2: All Departments */}
        <div className="relative mx-5">
          <select className="block bg-black appearance-none border border-solid border-outline-gray-900 text-gray-200 py-2 px-4 pr-8 leading-tight ">
            <option>All Departments</option>
            <option>All Departments</option>
            <option>All Departments</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <BiCaretDown className="w-6 h-6 ml-6" />
           
          </div>
        </div>
      </div>

      <table className=" min-w-full divide-y divide-gray-200">
        <thead className="text-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-200 tracking-wider">
              Team Member
            </th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-200 tracking-wider">
              Department
            </th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-200 tracking-wider">
              Roles
            </th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-200 tracking-wider">
              Remove
            </th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-200">
          {/* Sample row */}
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                <Link href="/">
                      <Image
                        src={profileImage}
                        alt="profileImage"
                        width={50}
                        className="rounded-full"
                      />
                </Link>
                </div>
                <div className="ml-4">
                  <div className="text-lg font-medium text-gray-200">
                    John Doe
                  </div>
                  <div className="text-sm text-gray-500">
                    @johndoe
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
      {/* Department dropdown */}
      <div className="relative">
        <select className="block bg-black appearance-none border border-solid border-outline-gray-900 text-gray-200 py-2 px-4 pr-8 leading-tight">
          <option>Management</option>
          <option>HR</option> {/* Add more department options */}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <BiCaretDown className="w-6 h-6 ml-1" />
        </div>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      {/* Roles dropdown */}
      <div className="relative">
        <select className="block bg-black appearance-none border border-solid border-outline-gray-900 text-gray-200 py-2 px-4 pr-8 leading-tight">
          <option>Management</option>
          <option>Employee</option> {/* Add more role options */}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <BiCaretDown className="w-6 h-6 ml-1" />
        </div>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      {/* Add remove button or action here */}
      <button className="text-red-500">Remove</button>
    </td>
          </tr>

          {/* You can add more rows with user information here */}
        </tbody>

      </table></>
  );
};

export default TeamTable;
