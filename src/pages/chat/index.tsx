import React from "react";
import { DashboardSearch, SearchSVG } from "@/components/shared";
import ChatDashboard from "@/components/chat/dashboard";
import KanbanSidebarMobile from "@/components/Sidebar/kanban/mobile";
import KanbanSidebarDesktop from "@/components/Sidebar/kanban/desktop";
import Image from "next/image";
import { BiPlus } from "react-icons/bi";

const ChatComponent = () => {
  return (
    <main className="w-full h-screen bg-black-500">
      <section className="">
        <section className="flex items-center gap-5 sm:gap-10">
          <KanbanSidebarMobile />
          <ChatDashboard />
        </section>

        <section className="py-5">
          <div className="flex xl:hidden">
            <DashboardSearch width="w-full" />
          </div>
        </section>
      </section>

      {/* chat display */}
      <section className="relative flex h-screen overflow-y-auto no-scrollbar ">
        <div className="bg-[#242424] rounded-md py-5 px-1 sm:px-2 min-w-[300px] w-screen md:w-[300px] lg:w-screen xl:w-[330px] h-full overflow-y-auto no-scrollbar">
          <div className="flex items-center justify-between px-2 pt-3 pb-10 border-b-[1px] border-zinc-50   ">
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
            <div className="flex gap-1 text-[14px] font-bold">
              New group <BiPlus className="w-[24px] h-[24px]" />
            </div>
          </div>

          <div className="flex flex-col gap-2 py-6">
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
                  key={list.id}
                  className="pl-3 pr-2 w-full h-[75px] flex items-center justify-between"
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
                      <p className="text-[14px] w-full xl:w-[180px] truncate text-ellipsis overflow-hidden ... ">
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
          </div>
        </div>
        <div className="bg-black hidden md:flex flex-1 h-screen overflow-y-auto no-scrollbar  ">
          <div className="absolute top-0 ">Users details</div>
          <div className="absolute bottom-0 ">Input panel</div>
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
