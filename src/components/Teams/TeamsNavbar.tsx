import { Team } from '@/assets';
import Link from 'next/link';
import Image from "next/image";
import React from 'react';
import { BiSearch } from 'react-icons/bi';

const TeamsNavbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      {/* Team Logo */}
      <div className="flex items-center">
      <Link href="/">
            <Image
              src={Team}
              alt="Team Logo"
              width={50}
              className="rounded-full"
            />
          </Link>
        <h1 className="text-white text-lg font-semibold">Teams</h1>
      </div>
        {/* Search */}
        <div className="flex  w-1/3  bg-[#0F0F0F] rounded-full items-center  ">
            <button>
              <BiSearch className="w-6 h-6 ml-6" />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="w-full  outline-none  text-white py-2 px-4 bg-[#0F0F0F] rounded-full "
            />
        </div>

      {/* Add Team Member Button */}
      <button className="bg-gradient-to-r from-[#FC8C02] to-[#5618FF] text-white py-2 px-4 rounded-full hover:bg-green-600">
        Add Team Member
        <i className="fa fa-plus m-2"></i> {/* Font Awesome plus icon */}
      </button>
    </nav>
  );
};

export default TeamsNavbar;