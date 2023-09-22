import React, { useState } from "react";
import {
  AttachSVG,
  DashboardSearch,
  EmojiSVG,
  ReceiveChatText,
  SearchSVG,
  SendChatText,
} from "@/components/shared";
import ChatDashboard from "@/components/chat/dashboard";
import KanbanSidebarMobile from "@/components/Sidebar/kanban/mobile";
import KanbanSidebarDesktop from "@/components/Sidebar/kanban/desktop";
import Image from "next/image";
import { BiPlus } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import DisplayChats from "@/components/chat/display-chats";
import CreateGroup from "@/components/chat/create-group";

const ChatComponent = () => {
  const [newGroup, setNewGroup] = useState(false);
  const displayNewGroupModal = () => {
    return setNewGroup(!newGroup);
  };

  const [openChat, setOpenChat] = useState(false);
  const toggleOpenChat = () => {
    return setOpenChat(!openChat);
  };

  return (
    // pt-6 lg:pt-12 px-4 sm:px-7

    <main className="w-full h-screen ">
      <section className="h-[16%] sm:h-[18%] md:h-[21%] xl:h-[15%] border-b-[1px] border-zinc-300  bg-black pt-6 lg:pt-12 px-4 sm:px-8 md:px-12">
        <section className="flex items-center gap-5 sm:gap-10">
          <KanbanSidebarMobile />
          <ChatDashboard />
        </section>

        <section className="py-3">
          <div className="flex xl:hidden">
            <DashboardSearch width="w-full" />
          </div>
        </section>
      </section>

      <div className="absolute top-0 left-0 z-50 bg-[#191919]">
        {newGroup && <CreateGroup onclick={displayNewGroupModal} />}
      </div>

      {/* chat display */}
      <section className="relative mt-4 flex h-[82%] sm:h-[80%] md:h-[77%] xl:h-[83%] w-[100%]">
        <div className="bg-[#242424] rounded-md px-1 sm:px-2 py-3 w-[100%] xl:w-[36%] 2xl:w-[28%] h-full overflow-y-auto no-scrollbar">
          <div className="flex items-center justify-between px-2 pt-2 pb-5 border-b-[1px] border-zinc-50">
            <div
              className={`w-[160px] flex items-center rounded-full h-[45px] px-6 py-2 gap-2 text-[#999999] bg-zinc-900`}
            >
              <SearchSVG />
              <input
                type="search"
                placeholder="Search"
                className="bg-inherit focus:outline-none"
              />
            </div>
            <div
              onClick={displayNewGroupModal}
              className="flex gap-1 text-[14px] font-bold"
            >
              New group <BiPlus className="w-[24px] h-[24px]" />
            </div>
          </div>

          <div className="flex flex-col gap-2 py-6 pr-3">
            {[
              {
                id: 1,
                name: "Eric",
                chat: "What did the cat say to the dog?",
                time: "5mins",
              },
              {
                id: 2,
                name: "Eric",
                chat: "You can't catch me",
                time: "13mins",
              },
              {
                id: 3,
                name: "Eric",
                chat: "What did the rat say to the dog?",
                time: "16mins",
              },
              {
                id: 4,
                name: "Eric",
                chat: "You can't catch me",
                time: "30mins",
              },
              {
                id: 5,
                name: "Eric",
                chat: "What did the rat say to the dog?",
                time: "34mins",
              },
              {
                id: 6,
                name: "Eric",
                chat: "You can't catch me",
                time: "34mins",
              },
              {
                id: 7,
                name: "Eric",
                chat: "What did the rat say to the dog?",
                time: "34mins",
              },
              {
                id: 8,
                name: "Eric",
                chat: "You can't catch me",
                time: "52mins",
              },
              {
                id: 9,
                name: "Eric",
                chat: "What did the rat say to the dog?",
                time: "59mins",
              },
              {
                id: 10,
                name: "Eric",
                chat: "You can't catch me",
                time: "02:35",
              },
              {
                id: 11,
                name: "Eric",
                chat: "What did the rat say to the dog?",
                time: "02:35",
              },
              {
                id: 12,
                name: "Eric",
                chat: "You can't catch me",
                time: "02:35",
              },
              {
                id: 13,
                name: "Eric",
                chat: "What did the rat say to the dog?",
                time: "02:35",
              },
              {
                id: 14,
                name: "Eric",
                chat: "You can't catch me",
                time: "02:35",
              },
            ].map((list) => {
              return (
                <section
                  onClick={toggleOpenChat}
                  key={list.id}
                  className="w-full h-[75px] flex items-center justify-between"
                >
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-[60px] h-[60px] rounded-full">
                      <Image
                        width={60}
                        height={60}
                        alt="user-avatar"
                        src="/images/user-avatar.png"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[11px] ">{list.name}</p>
                      <p className="text-[14px] min-w-[150px] max-w-[180px] sm:min-w-[auto] sm:max-w-[auto] sm:w-full xl:w-[180px] truncate text-ellipsis overflow-hidden ... ">
                        {list.chat}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center w-auto max-w-[35px] text-[11px]  ">
                    <p>13mins</p>
                    <p className="bg-[#13F129] w-[20px] h-[20px] py-[2px] rounded-full text-center ">
                      99
                    </p>
                  </div>
                </section>
              );
            })}

            <div className="">
              {openChat && (
                <div className="absolute flex xl:hidden top-0 left-0 z-50 w-screen h-[100%] bg-black">
                  <DisplayChats onclick={toggleOpenChat} />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="hidden xl:flex">
          <DisplayChats />
        </div>
      </section>
    </main>
  );
};

const Index = () => {
  return (
    <KanbanSidebarDesktop>
      <ChatComponent />
    </KanbanSidebarDesktop>
  );
};

export default Index;
