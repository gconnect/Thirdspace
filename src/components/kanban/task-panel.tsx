import React from "react";
import { ThreeDotIcon, PlusIcon, TaskCard } from "../shared";
import Image from "next/image";
import { Img } from "@chakra-ui/react";

const TaskPanel = () => {
  return (
    <section className="relative w-auto overflow-x-auto no-scrollbar lg:overflow-x-auto ">
      <section className="w-full min-w-[1000px] max-w-[1100px] pt-10 pb-5 grid grid-cols-3 h-auto">
        {/* todo */}
        <div className=" flex items-center justify-between px-14">
          <div className="flex gap-2 items-center">
            <p className="bg-[#999999] w-auto px-3 py-1 mr-2 text-[#1F1F1F] text-[20px] font-bold rounded-md">
              To Do
            </p>
            <span>1</span>
          </div>
          <div className="flex items-center gap-5">
            <ThreeDotIcon />
            <PlusIcon />
          </div>
        </div>
        {/* in progress */}
        <div className=" flex items-center justify-between px-14">
          <div className="flex gap-2 items-center">
            <p className="bg-[#F18413] w-auto px-3 py-1 mr-2 text-[#1F1F1F] text-[20px] font-bold rounded-md">
              In Progress
            </p>
            <span>2</span>
          </div>
          <div className="flex items-center gap-5">
            <ThreeDotIcon />
            <PlusIcon />
          </div>
        </div>
        {/* done */}
        <div className="flex items-center justify-between px-14   ">
          <div className="flex gap-2 items-center">
            <p className="bg-[#13F129] w-auto px-3 py-1 mr-2 text-[#1F1F1F] text-[20px] font-bold rounded-md">
              Done
            </p>
            <span>0</span>
          </div>
          <div className="flex items-center gap-5">
            <ThreeDotIcon />
            <PlusIcon />
          </div>
        </div>
      </section>

      <section className="w-full min-w-[1000px] max-w-[1100px] pt-10 pb-5 grid grid-cols-3 items-start h-auto">
        <div className="flex flex-col gap-7 justify-center pr-5 py-0 xl:py-0 2xl:py-0 ">
          <TaskCard borderColor="border-gray" />
        </div>

        <div className="relative flex">
          <div>
            <Img
              alt="line"
              // width={1}
              // height={100}
              src="/images/line.svg"
              className="absolute -right-[2px] 2xl:-right-[6px] h-screen"
            />
          </div>

          <div className="flex flex-col gap-7 items-center justify-center px-5">
            <TaskCard borderColor={"border-[#F18413]"} />
            <TaskCard borderColor={"border-[#F18413]"} />
            <TaskCard borderColor={"border-[#F18413]"} />
          </div>

          <div>
            <Img
              alt="line"
              // width={1}
              // height={100}
              src="/images/line.svg"
              className="absolute -left-[1px] 2xl:-left-[14px] h-screen"
            />
          </div>
        </div>

        <div className="flex flex-col gap-7 items-center justify-center pl-5 py-0 xl:py-0 2xl:py-0">
          <TaskCard borderColor={"border-[#13F129]"} />
          <TaskCard borderColor={"border-[#13F129]"} />
        </div>
      </section>
    </section>
  );
};

export default TaskPanel;
