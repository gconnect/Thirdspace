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
      <Link href="/" className="ml-10 mb-4">
        <Image src={logo} alt="logo" width={180} />
      </Link>

      <div className="overflow-hidden bg-[#0A0A0A] p-2 ">
        <div className="flex flex-row  justify-between p-4  mx-6 ">
          {/* Members */}
          <div className="flex flex-row gap-1 ">
            <h2 className="text-white  font-nexa font-extrabold text-3xl ">
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
    </>
  );
};

export default AvailableBounties;
