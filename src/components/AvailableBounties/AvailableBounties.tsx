import { logo } from "@/assets";
import { ViewAvailableBounties } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import AvailableBountiesCard from "./AvailableBountiesCard";

type Props = {};

const AvailableBounties = (props: Props) => {
  //
  return (
    <>
      <div className="bg-[#050505]">
        <div className="ml-10 ">
          <Link href="/">
            <Image src={logo} alt="logo" width={180} />
          </Link>
        </div>

        <div className="overflow-hidden bg-[#0A0A0A] h-screen p-2 mt-10 ">
          <div className="flex flex-row  justify-between p-4  mx-6 ">
            {/* Members */}
            <div className="flex flex-row gap-1 ">
              <h2 className="text-white  font-dmSans font-extrabold text-2xl ">
                Available Bounties
              </h2>
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
          </div>

          <div>
            <AvailableBountiesCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default AvailableBounties;
