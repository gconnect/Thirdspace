import React from "react";
import Image from "next/image";

const NoChat = () => {
  return (
    <div className="w-screen lg:w-[70%] xl:w-[64%] 2xl:w-[72%] overflow-y-auto no-scrollbar">
      <div className="lg:w-[70%] xl:w-[64%] 2xl:w-[72%] h-[77%] flex flex-col absolute top-0 bottom-0 overflow-y-auto no-scrollbar">
        <div className="flex gap-2 flex-col m-auto items-center justify-center text-[#999999] ">
          <Image
            width={30}
            height={30}
            alt="chat-logo"
            src="/images/chat-logo.png"
          />
          <h1 className="text-[16px]">
            Click on a chat in the sidebar to get started{" "}
          </h1>
          <h1 className="text-[13px]">
            Or create a new chat or group in from the sidebar{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NoChat;
