import { ArrowdownIcon, CloseBtn, CreateBtn } from "@/components/kanban/shared";
import { Input } from "@chakra-ui/react";
import React from "react";
import { InputField, TaskStatus, TextArea } from "./viewTask";

const AddTask = (props: { onclick: any }) => {
  return (
    <div className="text-white font-normal h-screen w-screen overflow-y-auto flex items-center justify-center">
      <div className="bg-[#0F0F0F] rounded-md h-auto w-screen mx-4 sm:mx-0 sm:w-[586px] md:w-[700px] flex flex-col items-center">
        <div onClick={props.onclick} className="py-[28px] self-end pr-[28px]">
          <CloseBtn />
        </div>

        <p className="text-[32px] font-bold">Add Task</p>
        <p className="text-base text-[#999] pt-4 pb-12 text-center px-4 ">
          Add a team member and assign roles to them.
        </p>

        <form className="w-full px-4 sm:px-12 md:px-28  text-[#999] text-sm flex flex-col gap-[10px] pb-12 ">
          <InputField type={"text"} placeholder={"Task Title"} />

          <TaskStatus />

          <TextArea placeholder="Task Description" />

          <InputField type={"text"} placeholder={"Assignee"} />

          <InputField type={"date"} placeholder={"Due Date"} />

          <InputField type={"file"} placeholder={undefined} />
        </form>

        <div className="w-full px-3 sm:px-8 md:px-24 flex items-center justify-center pb-20 ">
          <button className="buttonLinearBackground w-full flex items-center justify-center py-3 gap-5 sm:gap-4 text-[16px] font-medium rounded-lg">
            <p>Create</p>
            <CreateBtn />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
