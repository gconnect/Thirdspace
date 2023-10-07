import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { BiSearch } from "react-icons/bi";
import BountyDetailModal from "./BountyDetailModal";
import { BASE_URL } from "@/utils/constants";
import axios from "axios";

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
  const [availableBounties, setAvailableBounties] = useState<any[]>([]);

  const handleBountyClick = (selectedBounty: Bounty) => {
    setShowModal(true);
    setSelectedBounty(selectedBounty);
  };

  const getAvailableBounties = useCallback(async () => {
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzMmNmNTY5NC00YjEzLTQxYzctYWIwYy05OTJmNmU5ZDIwZWYiLCJpYXQiOjE2OTYzODU1NDUsImV4cCI6MTY5NjQ3MTk0NX0.HYtygaSG2avA5kmcgOPe97OtAkMNsgocycaAduLNrBU"

    try{
      const res = await axios.get(`${BASE_URL}/bounties`, {
        headers:{
          Authorization: token
        }
      })
      setAvailableBounties(res.data)
      console.log(res.data)
    }catch(error){
      console.log(error)
    }
  },[])

  useEffect(() => {
    getAvailableBounties();
  }, [getAvailableBounties]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  ">
      {availableBounties.length < 1 ? 
      <div>Opps there is currently no bounty. Check back later!</div> 
      : availableBounties &&
       availableBounties.map((item: any) => (
        <div
          key={item.id}
          className="text-white"
          onClick={() => handleBountyClick(item)}
        >
          {/* Desktop View */}
          <div className="hidden md:flex border-[#1F1F1F] border  mt-4 mx-6 relative ">
            <div className="flex flex-row gap-4 p-6 cursor-pointer">
              <Image
                src={item.image}
                alt="bountyImage"
                width={100}
                className=""
              />

              <div className="flex flex-col mt-3">
                <h2 className="font-dmSans font-bold text-base">
                  {item.title}
                </h2>
                <div className="flex flex-row justify-between font-dmSans text-xs my-2 mr-6">
                  <p>
                    <span className="text-[#999999]">Start Date: </span>
                    {item.startDate}
                  </p>
                  <p>
                    <span className="text-[#999999]">End Date:</span>
                    {item.endDate}
                  </p>
                </div>

                <p className="font-dmSans  font-normal text-xs mb-2 text-[#999999]">
                  {item.description}
                </p>
              </div>

              <div className="flex justify-center w-[120px] h-[30px] bg-[#1F1F1F] items-center absolute bottom-1 right-6">
                <p className="font font-bold text-xs">
                  {item.reward}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile View  */}

          <div className=" flex md:hidden  mt-4  ">
            <div className="flex flex-col  p-6 cursor-pointer">
              <div className="flex flex-row gap-4 ">
                <Image
                  src={item.image}
                  alt="bountyImage"
                  width={100}
                  className=""
                />

                <div className="flex flex-col ">
                  <h2 className="font-dmSans font-medium text-base">
                    {item.title}
                  </h2>
                  <div className="flex flex-col font-dmSans font-medium text-xs space-y-1 mt-2">
                    <p>
                      <span className="text-[#999999]">Start Date: </span>
                      {item.startDate}
                    </p>
                    <p>
                      <span className="text-[#999999]">End Date:</span>
                      {item.endDate}
                    </p>
                  </div>
                </div>
              </div>
              <p className="font-dmSans mt-4 font-normal text-xs mb-2 text-[#999999]">
                {item.description}
              </p>

              <div className="flex justify-center w-full h-[30px] bg-[#1F1F1F] items-center mt-2 ">
                <p className="font font-bold text-xs">
                  {item.reward}
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

      <div className=" flex border border-[#999] items-center mx-auto justify-center w-1/2 mb-10 mt-2 ">
        <button className="text-[#999]">Load more...</button>
      </div>
    </div>
  );
};

export default AvailableBountiesCard;
