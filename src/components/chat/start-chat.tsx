import {
  CloseBtn,
  TextArea,
  InputField,
  StatusDropdownIcon,
  ArrowRightDiagonalBtn,
} from "@/components/shared";
import Image from "next/image";
import React, { useState } from "react";
import CreateGroup from "./create-group";

export const ChatOptions = () => {
  return (
    <div className="w-full text-[14px] font-normal bg-[#3F3F3F] text-white">
      <main className="flex items-center w-full h-[40px] ">
        <select
          style={{
            WebkitAppearance: "none",
            appearance: "none",
          }}
          className="w-full h-[40px] none -mr-[10px] pl-4 text-[14px] border-[1px] border-zinc-300  font-normal bg-[#3F3F3F] text-white focus:[#873ab3] focus:[#873ab3] focus:ring-1"
        >
          <option>Start chat with</option>
          <option>Eric</option>
          <option>Glory</option>
          <option>Shan</option>
        </select>
        <div className="relative right-5">
          <StatusDropdownIcon />
        </div>
      </main>
    </div>
  );
};

const StartChat = (props: { onclick: any }) => {
  const [createGroup, setCreateGroup] = useState(false);
  const toggleCreateGroup = () => {
    return setCreateGroup(!createGroup);
  };

  return (
    <div className="text-white font-normal h-screen w-screen overflow-y-auto flex items-center justify-center">
      <div className="bg-[#0F0F0F] rounded-md h-auto w-screen mx-4 sm:mx-0 sm:w-[586px] md:w-[700px] flex flex-col items-center">
        <div onClick={props.onclick} className="py-[28px] self-end pr-[28px]">
          <CloseBtn />
        </div>

        <p className="text-[32px] font-bold">Start Chat</p>
        <p className="text-base text-[#999] pt-4 pb-12 text-center px-4 ">
          Start a new chat
        </p>

        <form className="w-full px-4 sm:px-12 md:px-28  text-[#999] text-sm flex flex-col gap-[10px] pb-12 ">
          <ChatOptions />

          <TextArea placeholder="Write message..." />

          <InputField
            type="file"
            placeholder={"Upload or drag & drop files here"}
          />
        </form>

        <div className="w-full px-3 sm:px-8 md:px-24 flex items-center justify-center pb-10">
          <button
            onClick={props.onclick}
            className="buttonLinearBackground w-full flex items-center justify-center py-3 gap-5 sm:gap-4 text-[16px] font-bold rounded-lg"
          >
            <p>Send</p>
            <ArrowRightDiagonalBtn />
          </button>
        </div>

        <div
          onClick={toggleCreateGroup}
          className="w-full px-3 sm:px-8 md:px-24 flex items-center justify-center pb-20 "
        >
          <button className="w-full flex items-center justify-center py-3 gap-5 sm:gap-4 text-[16px] font-bold rounded-lg">
            <Image
              width={165}
              height={25}
              alt="create-group"
              src="/images/create-group-instead.svg"
            />

            <Image
              width={24}
              height={24}
              alt="create-grp-btn"
              src="/images/arrow-outward.svg"
            />
          </button>
        </div>
        <div>
          {createGroup ? (
            <div className="w-full h-screen absolute top-0 left-0 right-0 bottom-0 ">
              <CreateGroup onclick={toggleCreateGroup} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default StartChat;
