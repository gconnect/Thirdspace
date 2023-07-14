import { ViewAvailableBounties } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import BountyDetailModal from "./BountyDetailModal";

type Props = {
  selectedBounty: Bounty | null;
};

type Bounty = {
  id: string;
  image: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  reward: string;
};

const AvailableBountiesCard = (props: any) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBounty, setSelectedBounty] = useState<Bounty | null>(null);

  const handleBountyClick = (selectedBounty: Bounty) => {
    setShowModal(true);
    setSelectedBounty(selectedBounty);
  };

  return (
    <div className="grid grid-cols-2  ">
      {ViewAvailableBounties.map((viewAvailableBounty) => (
        <div
          key={viewAvailableBounty.id}
          className="text-white"
          onClick={() => handleBountyClick(viewAvailableBounty)}
        >
          <div className="border-[#1F1F1F] border  mt-4 mx-6 relative">
            <div className="flex flex-row gap-4 p-6 cursor-pointer ">
              <Image
                src={viewAvailableBounty.image}
                alt="bountyImage"
                width={100}
                className=""
              />

              <div className="flex flex-col mt-3">
                <h2 className="font-dmSans font-bold text-base">
                  {viewAvailableBounty.title}
                </h2>
                <div className="flex flex-row justify-between font-dmSans text-xs my-2 mr-6">
                  <p>
                    <span className="text-[#999999]">Start Date: </span>
                    {viewAvailableBounty.startDate}
                  </p>
                  <p>
                    <span className="text-[#999999]">End Date:</span>
                    {viewAvailableBounty.endDate}
                  </p>
                </div>

                <p className="font-dmSans font-normal text-xs mb-2 text-[#999999]">
                  {viewAvailableBounty.description}
                </p>
              </div>

              <div className="flex justify-center w-[120px] h-[30px] bg-[#1F1F1F] items-center absolute bottom-1 right-6">
                <p className="font font-bold text-xs">
                  {viewAvailableBounty.reward}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* BountyDetail Modal */}
      <BountyDetailModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        selectedBounty={selectedBounty}
      ></BountyDetailModal>
    </div>
  );
};

export default AvailableBountiesCard;
