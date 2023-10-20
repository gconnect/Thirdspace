import SidebarDesktop from "@/components/Sidebar/desktop";
import SidebarMobile from "@/components/Sidebar/mobile";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { profileImage } from "@/assets";
import { BsFillGearFill } from "react-icons/bs";
import { CiCircleRemove } from "react-icons/ci";

const SettingComponent = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <main className="w-full h-screen px-5 md:px-10  xl:px-16 ">
      <div className="flex justify-end pt-16">
        <Link href="/">
          <Image
            width={50}
            src={profileImage}
            alt="profileImage"
            className="rounded-full"
          />
        </Link>
      </div>

      <div className="flex flex-row gap-5 mt-10  ">
        <section className=" flex items-center gap-5 sm:gap-10">
          <SidebarMobile />
        </section>
        <div className="flex flex-row gap-2 items-center justify-center ">
          <BsFillGearFill className="w-6 h-6" />
          <h2 className="text-white  font-nexa font-extrabold text-2xl ">
            Settings
          </h2>
        </div>
      </div>

      <section className="bg-[#0A0A0A] mt-10 pl-4 sm:pl-8 pr-5 h-[70%] flex flex-col justify-evenly ">
        <div className="flex items-center sm:items-start justify-center sm:justify-between flex-row">
          <div className="flex flex-col items-center sm:items-start ">
            <h2>Bounty space Logo/Image</h2>
            <div className="w-36 h-36 rounded-full border-[#999999] border-2  flex items-center  justify-center mt-[16px]">
              <button className="text-sm">Click to upload Photo</button>
            </div>
          </div>

          <button
            className="items-center rounded-full hidden sm:flex flex-row bg-[#B2000029] border border-[#B20000] w-auto px-8 h-[48px] justify-center gap-1 p-2 font-nexa font-normal  "
            onClick={() => setShowModal(true)}
          >
            <p className="hidden sm:flex">Delete Bounty Space</p>
            <div className="RemoveIcon-container">
              <CiCircleRemove />
            </div>
          </button>
        </div>

        <div className="">
          <label htmlFor="spaceName">Bounty space name</label>
          <input
            type="text"
            name="spaceName"
            id="spaceName"
            placeholder="Bounty To Bounties"
            className="w-full border-[#999999] bg-[#0A0A0A] text-white border outline-none p-2 mt-2 "
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-14 mb-10">
          <button className="btnBackgroundGradient w-full h-[48px] items-center rounded-[8px] ">
            Save Changes
          </button>
        </div>
      </section>
    </main>
  );
};

const CreatorSettings = () => {
  return (
    <SidebarDesktop>
      <SettingComponent />
    </SidebarDesktop>
  );
};

export default CreatorSettings;
