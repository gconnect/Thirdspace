import React, { useState } from 'react';
import { BiSolidUser, BiSearch } from 'react-icons/bi';
import AddTeamMemberModal from './AddTeamMemberModal';

const TeamsNavbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <><nav className="flex items-center justify-between p-4">
      {/* Team Logo */}
      <div className="flex items-center sm:pr-5">
        <BiSolidUser className="w-6 h-6 ml-6" />
        <h1 className="text-white text-lg font-semibold">Teams</h1>
      </div>

      {/* Search - Hidden on Mobile */}
      <div className="hidden lg:flex w-1/3 bg-[#0F0F0F] rounded-3 items-center">
        <button>
          <BiSearch className="w-6 h-6 ml-6" />
        </button>
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none text-white py-2 px-4 bg-[#0F0F0F] rounded-full" />
      </div>

      {/* Add Team Member Button */}
      <button className="bg-gradient-to-r from-[#FC8C02] to-[#5618FF] text-white py-2 px-4 rounded-full hover:bg-green-600
        sm:py-0 sm:px-4 sm:text-xs sm:rounded-full "
        onClick={toggleModal}>
        Add Team Member
        <i className="fa fa-plus m-2"></i> {/* Font Awesome plus icon */}
      </button>
      <AddTeamMemberModal isOpen={modalOpen} onClose={toggleModal} />


    </nav>
     {/* Search - Display in Mobile View */}
     <div className="relative lg:hidden md:hidden lg:flex mb-4 ">
          <button>
            <BiSearch className="absolute bottom-2 right-2 w-6 h-6 ml-6" />
          </button>
          <input
            type="text"
            placeholder="Search"
            className=" w-full outline-none text-white py-2 px-5 bg-[#0F0F0F] rounded-full"
          />
        </div>
   </>
  );
};

export default TeamsNavbar;
