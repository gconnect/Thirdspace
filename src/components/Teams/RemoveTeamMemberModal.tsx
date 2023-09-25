import React from 'react';
import { ImCancelCircle } from 'react-icons/im';
// import CautionIcon from '../src/assets/CautionIcon.svg';

interface RemoveTeamMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RemoveTeamMemberModal: React.FC<RemoveTeamMemberModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full h-screen overflow-x-hidden overflow-y-auto">
      <div className="relative w-full max-w-md mx-auto max-h-full p-4 md:inset-0">
        <div className="relative bg-black rounded-lg shadow-lg text-white">
          {/* Modal content */}
          <div className="px-6 py-6 lg:px-8 text-center">
            {/* Close button */}
            <button
              type="button"
              className="absolute top-3 right-2.5 text-white bg-transparent rounded-full w-10 h-10 ml-auto inline-flex justify-center items-center"
              onClick={onClose}
            >
              <ImCancelCircle className="w-6 h-6 ml-1" />
              <span className="sr-only">Close modal</span>
            </button>

            {/* SVG Image */}
           <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152' fill='none'%3E%3Cmask id='mask0_1112_273' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='2' y='10' width='152' height='132'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M78 16L8 136H148L78 16Z' fill='white' stroke='white' stroke-width='12' stroke-linejoin='round'/%3E%3Cpath d='M76 108.941V112M76 60L76.0255 90.5882' stroke='black' stroke-width='12' stroke-linecap='round'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_1112_273)'%3E%3Cpath d='M0 0H152V152H0V0Z' fill='url(%23paint0_linear_1112_273)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1112_273' x1='-65.398' y1='152' x2='179.428' y2='150.138' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FC8C02'/%3E%3Cstop offset='1' stop-color='%235618FF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
            alt="Header Image"
            className="mt-2 rounded-lg mx-auto"
            style={{ maxWidth: '100%', height: 'auto' }}
            />

            <h3 className="mb-2 text-2xl font-semibold"> Wait a minute!</h3>
            <p className="mb-4 text-gray-300">Are you sure you want to remove this member?</p>

              {/* Yes and No buttons */}
              <div className="flex justify-center space-x-4">
                <button
                  type="button"
                  className="bg-red-600 hover:bg-red-800 text-white font-medium rounded-lg text-sm px-5 py-2.5"
                  style={{
                    border: '0px solid var(--Red, #B20000)',
                    background: 'rgba(178, 0, 0, 0.16)',
                  }}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg text-sm px-5 py-2.5"
                  style={{
                    border: '0px solid var(--Green, #13F129)',
                    background: 'rgba(19, 241, 41, 0.16)',
                  }}
                  onClick={onClose}
                >
                  No
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveTeamMemberModal;
