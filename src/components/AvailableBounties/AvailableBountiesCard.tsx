import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { BiSearch } from "react-icons/bi";
import BountyDetailModal from "./BountyDetailModal";
import { BASE_URL } from "@/utils/constants";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
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
  const { data: session } = useSession();

  // const availableBounties = [
  //   {
  //     id: 1,
  //     image: "/images/image-1.svg",
  //     title: "Armored Core: Verdict Day access memory violation crash",
  //     startDate: "21st June, 2023",
  //     endDate: "21st June, 2023",
  //     description:
  //       " Acronis looks forward to working with the security community to find security vulnerabilities in order to keep our businesses and customers safe. Rules for us We respect the time and effort of our The work done so far has been achieved by porting over the C version of the driver: georgerobotics/cyw43-driver. This driver is used by the SDK maintained by the Raspberry Pi foun.............",
  //     reward: "50,000",
  //   },
  //   {
  //     id: 2,
  //     image: "/images/image-2.png",
  //     title: "Armored Core: Verdict Day access memory violation crash",
  //     startDate: "21st June, 2023",
  //     endDate: "21st June, 2023",
  //     description:
  //       " Acronis looks forward to working with the security community to find security vulnerabilities in order to keep our businesses and customers safe. Rules for us We respect the time and effort of our The work done so far has been achieved by porting over the C version of the driver: georgerobotics/cyw43-driver. This driver is used by the SDK maintained by the Raspberry Pi foun.............",
  //     reward: "50,000",
  //   },
  //   {
  //     id: 3,
  //     image: "/images/image-2.svg",
  //     title: "Armored Core: Verdict Day access memory violation crash",
  //     startDate: "21st June, 2023",
  //     endDate: "21st June, 2023",
  //     description:
  //       " Acronis looks forward to working with the security community to find security vulnerabilities in order to keep our businesses and customers safe. Rules for us We respect the time and effort of our The work done so far has been achieved by porting over the C version of the driver: georgerobotics/cyw43-driver. This driver is used by the SDK maintained by the Raspberry Pi foun.............",
  //     reward: "50,000",
  //   },
  //   {
  //     id: 4,
  //     image: "/images/image-1.svg",
  //     title: "Armored Core: Verdict Day access memory violation crash",
  //     startDate: "21st June, 2023",
  //     endDate: "21st June, 2023",
  //     description:
  //       " Acronis looks forward to working with the security community to find security vulnerabilities in order to keep our businesses and customers safe. Rules for us We respect the time and effort of our The work done so far has been achieved by porting over the C version of the driver: georgerobotics/cyw43-driver. This driver is used by the SDK maintained by the Raspberry Pi foun.............",
  //     reward: "50,000",
  //   },
  //   {
  //     id: 5,
  //     image: "/images/image-2.png",
  //     title: "Armored Core: Verdict Day access memory violation crash",
  //     startDate: "21st June, 2023",
  //     endDate: "21st June, 2023",
  //     description:
  //       " Acronis looks forward to working with the security community to find security vulnerabilities in order to keep our businesses and customers safe. Rules for us We respect the time and effort of our The work done so far has been achieved by porting over the C version of the driver: georgerobotics/cyw43-driver. This driver is used by the SDK maintained by the Raspberry Pi foun.............",
  //     reward: "50,000",
  //   },
  //   {
  //     id: 6,
  //     image: "/images/image-2.svg",
  //     title: "Armored Core: Verdict Day access memory violation crash",
  //     startDate: "21st June, 2023",
  //     endDate: "21st June, 2023",
  //     description:
  //       " Acronis looks forward to working with the security community to find security vulnerabilities in order to keep our businesses and customers safe. Rules for us We respect the time and effort of our The work done so far has been achieved by porting over the C version of the driver: georgerobotics/cyw43-driver. This driver is used by the SDK maintained by the Raspberry Pi foun.............",
  //     reward: "50,000",
  //   },
  // ];

  const handleBountyClick = (selectedBounty: Bounty) => {
    setShowModal(true);
    setSelectedBounty(selectedBounty);
  };

  const getAvailableBounties = useCallback(async () => {
    try {
      const res = await axios.get(`${BASE_URL}/bounties`, {
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
        },
      });
      setAvailableBounties(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }, [session?.user.token]);

  useEffect(() => {
    getAvailableBounties();
  }, [getAvailableBounties]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {availableBounties.length < 1 ? (
        <div>Opps there is currently no bounty. Check back later!</div>
      ) : (
        availableBounties &&
        availableBounties.map((item: any) => (
          <div
            key={item.id}
            className="text-white"
            onClick={() => handleBountyClick(item)}
          >
            {/* Desktop View */}
            <Link href="/bounty-creator/id">
              <div className="hidden md:flex border-[#1F1F1F] border mt-4 relative ">
                <div className="flex flex-row gap-4 p-6 cursor-pointer">
                  <Image
                    width={100}
                    className=""
                    height={100}
                    src={item.image}
                    alt="bountyImage"
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
                      {" "}
                      Reward: ${item.reward}
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Mobile View  */}

            <div className=" flex md:hidden  mt-4  ">
              <div className="flex flex-col  p-6 cursor-pointer">
                <div className="flex flex-row gap-4 ">
                  <Image
                    src={item.image}
                    alt="bountyImage"
                    width={100}
                    className=""
                    height={100}
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
                    Reward: ${item.reward}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      {/* BountyDetail Modal */}
      <BountyDetailModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        selectedBounty={selectedBounty}
      ></BountyDetailModal>

      <div className="flex items-center justify-end">
        <button className="text-[#999] flex border border-[#999] px-5 py-1 rounded mb-10 mt-2 ">
          Load more...
        </button>
      </div>
    </div>
  );
};

export default AvailableBountiesCard;
