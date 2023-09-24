import React from 'react';

interface AddTeamMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddTeamMemberModal: React.FC<AddTeamMemberModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full h-screen overflow-x-hidden overflow-y-auto">
      <div className="relative w-full max-w-md mx-auto max-h-full p-4 md:inset-0">
        <div className="relative bg-black rounded-lg shadow-lg text-white">
          {/* Close button */}
          <button
            type="button"
            className="absolute top-3 right-2.5 text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full w-10 h-10 ml-auto inline-flex justify-center items-center"
            onClick={onClose}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>

          {/* Modal content */}
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-2 text-2xl font-semibold">Add Team Member</h3>
            <p className="mb-4 text-gray-300">Add a team member and assign roles to them.</p>

            {/* Form */}
            <form className="space-y-6" action="#">
              {/* Email input field */}
              <div className="mb-4 bg-black border-gray-600 border rounded-lg">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Paste email here"
                  className="bg-black border-gray-600 border text-white text-sm rounded-lg focus:ring-white focus:border-gray-400 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  required
                />
              </div>

              {/* Department dropdown */}
              <div className="mb-4 bg-black border-gray-600 border rounded-lg">
                {/* Replace this with your Department dropdown */}
                <select
                  name="department"
                  id="department"
                  className="bg-black border-gray-600 border text-white text-sm rounded-lg focus:ring-white focus:border-gray-400 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  required
                >
                  <option value="">Department</option>
                  {/* Add department options here */}
                </select>
              </div>

              {/* Assign Role dropdown */}
              <div className="mb-4 bg-black border-gray-600 border rounded-lg">
                <select
                  name="assignRole"
                  id="assignRole"
                  className="bg-black border-gray-600 border text-white text-sm rounded-lg focus:ring-white focus:border-gray-400 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  required
                >
                  <option value="">Assign Role</option>
                  {/* Add role options here */}
                </select>
              </div>

              {/* Send Invite button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FC8C02] to-[#5618FF] text-white hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Send Invite
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeamMemberModal;
