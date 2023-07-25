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


          </div>
          

          <div>
            <AvailableBountiesCard />
          </div>
          
        </div>
        <div className="">
          <Link href="/"> 
            <Image src="/arrow.svg" alt=""  className="ml-[2.3rem]" width={35} height={35}/>
            
            </Link>
            </div>

        {/* Mobile View */}
      </div>
    </>
  );
};

export default AvailableBounties;
