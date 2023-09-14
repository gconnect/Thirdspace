import { CloseBtn, CreateBtn } from "@/components/kanban/shared";
import React, { useState } from "react";

const StatusDropdownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="5"
      viewBox="0 0 10 5"
      fill="none"
    >
      <path d="M0 0L5 5L10 0H0Z" fill="#999999" />
    </svg>
  );
};

export const InputField = (props: {
  tag?: string;
  type: string;
  placeholder: any;
}) => {
  return (
    <div className="text-[14px] font-normal bg-[#3F3F3F] text-white">
      <p className="pb-[10px] bg-[#0F0F0F] text-[#999]">{props.tag}</p>
      <input
        type={props.type}
        className="h-auto py-[9px] px-4 border-[1px] border-zinc-400 focus:outline-none focus:[#873ab3] focus:[#873ab3] focus:ring-1"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export const TextArea = (props: { tag?: string; placeholder: string }) => {
  return (
    <div className="w-full text-[14px] font-normal bg-[#3F3F3F] text-white   ">
      <p className="pb-[10px] bg-[#0F0F0F] text-[#999]">{props.tag}</p>

      <textarea
        placeholder={props.placeholder}
        className="w-full text-[14px] font-normal bg-[#3F3F3F] text-white p-4  border-[1px] border-zinc-400 focus:outline-none focus:[#873ab3] focus:[#873ab3] focus:ring-1"
      />
    </div>
  );
};

export const TaskStatus = (props: { tag?: string }) => {
  return (
    <div className="w-full text-[14px] font-normal bg-[#3F3F3F] text-white">
      <p className="pb-[10px] bg-[#0F0F0F] text-[#999]">{props.tag}</p>

      <main className="flex items-center w-full h-[40px] ">
        <select
          style={{
            WebkitAppearance: "none",
            appearance: "none",
          }}
          className="w-full h-[40px] none -mr-[10px] pl-4 text-[14px] border-[1px] border-zinc-300  font-normal bg-[#3F3F3F] text-white focus:[#873ab3] focus:[#873ab3] focus:ring-1"
        >
          <option>ToDo</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <div className="relative right-5">
          <StatusDropdownIcon />
        </div>
      </main>
    </div>
  );
};

const ViewTask = (props: { onclick: any }) => {
  const [edit, setEdit] = useState(false);
  const toggleEditTask = () => {
    setEdit(!edit);
  };

  return (
    <div className="text-white font-normal h-screen w-screen flex items-center justify-center">
      <div className="bg-[#0F0F0F] rounded-md h-auto w-screen mx-4 sm:mx-0 sm:w-[586px] md:w-[700px] flex flex-col items-center">
        <div onClick={props.onclick} className="py-[28px] self-end pr-[28px]">
          <CloseBtn />
        </div>

        <p className="text-[32px] font-bold">View/Edit Task</p>
        <p className="text-base text-[#999] pt-4 pb-12 text-center px-4 ">
          View or Edit a task.
        </p>

        <form className="w-full px-4 sm:px-12 md:px-28  text-[#999] text-sm flex flex-col gap-[18px] pb-12 ">
          <InputField
            type="text"
            tag="Task Title"
            placeholder="Armored Cable"
          />

          <TaskStatus tag="Task Status" />

          <TextArea
            tag="Task Description"
            placeholder="Acronis looks forward to working with the security community to find security vulnerabilities "
          />

          <InputField tag="Assignee" placeholder="Lolia" type="text" />

          <InputField type="date" tag="Due date" placeholder="July 23, 2023" />
          <InputField type="file" tag="Files attached" placeholder="cat.png" />
        </form>

        {!edit ? (
          <div
            onClick={toggleEditTask}
            className="w-full px-3 sm:px-8 md:px-24 flex items-center justify-center pb-[80px] "
          >
            <button className="buttonLinearBackground w-full flex items-center justify-center py-3 gap-5 sm:gap-4 text-[16px] font-medium rounded-lg">
              <p>Edit</p>
              <CreateBtn />
            </button>
          </div>
        ) : (
          <div
            onClick={toggleEditTask}
            className="w-full px-3 sm:px-8 md:px-24 flex items-center justify-center pb-[80px] "
          >
            <button className="buttonLinearBackground w-full flex items-center justify-center py-3 gap-5 sm:gap-4 text-[16px] font-medium rounded-lg">
              <p>Done</p>
              <CreateBtn />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewTask;
