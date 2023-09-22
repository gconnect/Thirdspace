import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  SearchSVG,
  ReceiveChatText,
  SendChatText,
  EmojiSVG,
  AttachSVG,
} from "../shared";
import Image from "next/image";

const DisplayChats = () => {
  return (
    <div className="hidden xl:flex xl:w-[70%] overflow-y-auto no-scrollbar">
      {/* chat contact */}
      <div className="w-[70%] pl-7 pr-10 py-2 absolute top-0 flex justify-between">
        <div className="flex gap-3 items-center">
          <Image
            src="/images/user-avatar.png"
            alt={"avatar"}
            width={48}
            height={48}
          />
          <p>Victor</p>
        </div>
        <div className="flex gap-3 items-center">
          <SearchSVG />
          <BsThreeDotsVertical height={24} width={24} />
        </div>
      </div>

      {/* chats */}
      <div className="w-[70%] h-[77%] flex flex-col absolute top-20 pl-7 pr-10 overflow-y-auto no-scrollbar">
        <>
          <div className="bg-[#242424] text-[#999999] mx-auto py-1 px-3 rounded-md">
            Yesterday
          </div>

          <div className="py-5 h-auto flex flex-col gap-[6px]">
            <SendChatText
              text="What did the cow say to the chicken?"
              time="3:45PM"
            />
            <ReceiveChatText
              text="What did the cow say to the chicken?"
              time="3:45PM"
            />
            <ReceiveChatText
              text="What did the cow say to the chicken?"
              time="3:45PM"
            />

            <SendChatText
              text="What did the cow say to the chicken?"
              time="3:45PM"
            />
            <SendChatText
              text="What did the cow say to the chicken?"
              time="3:45PM"
            />
          </div>
        </>
        <>
          <div className="bg-[#242424] text-[#999999] mx-auto py-1 px-3 rounded-md">
            Today
          </div>

          <div className="py-5 h-auto flex flex-col gap-[6px]">
            <ReceiveChatText
              text="What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?,What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?"
              time="3:45PM"
            />

            <ReceiveChatText
              text="What did the cow say to the chicken?"
              time="3:45PM"
            />
            <SendChatText
              text="What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?,What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?"
              time="3:45PM"
            />
            <SendChatText
              text="What did the cow say to the chicken?"
              time="3:45PM"
            />
            <ReceiveChatText
              text="What did the cow say to the chicken?"
              time="3:45PM"
            />
            <ReceiveChatText
              text="What did the cow say to the chicken?"
              time="3:45PM"
            />

            <SendChatText
              text="What did the cow say to the chicken?"
              time="3:45PM"
            />
            <SendChatText
              text="What did the cow say to the chicken?"
              time="3:45PM"
            />
          </div>
        </>
      </div>

      {/* //chat input */}
      <div className="absolute bottom-3 w-[70%] pl-7 pr-10 py-3">
        <div
          className={`flex items-center rounded-full w-[100%] h-auto px-6 py-4 gap-3 text-[#999999] border-zinc-200 border-[1px]`}
        >
          <EmojiSVG />
          <AttachSVG />
          <input
            type="text"
            placeholder="Write your message here"
            className="bg-inherit focus:outline-none mx-3 "
          />
          <Image src="/images/send.png" alt="send" width={40} height={20} />
        </div>
      </div>
    </div>
  );
};

export default DisplayChats;
