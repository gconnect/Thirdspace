import { CloseBtn, ArrowRightDiagonalBtn } from "@/components/shared";
import React from "react";

const InputField = (props: {
  tag?: string;
  type: string;
  placeholder: any;
  style?: any;
}) => {
  return (
    <div className="text-[14px] font-normal text-white">
      <p className="pb-[5px] text-xl font-normal text-white">{props.tag}</p>
      <input
        type={props.type}
        className={`${props.style}  h-auto py-[14px] px-3 border-[1px] bg-inherit border-zinc-400 focus:outline-none focus:[#873ab3] focus:[#873ab3] focus:ring-1`}
        placeholder={props.placeholder}
      />
    </div>
  );
};

const TextArea = (props: { tag?: string; placeholder: string }) => {
  return (
    <div className="w-full text-[14px] font-normal text-white   ">
      <p className="pb-[5px] text-xl font-normal text-white">{props.tag}</p>
      <textarea
        rows={7}
        // cols={10}
        placeholder={props.placeholder}
        className="w-full text-[14px] font-normal bg-inherit text-white p-4 -mb-1 border-[1px] border-zinc-400 focus:outline-none focus:[#873ab3] focus:[#873ab3] focus:ring-1"
      />
    </div>
  );
};

const EditBounty = (props: { onclick: any }) => {
  return (
    <div className="bg-[#0F0F0F] rounded-md h-auto w-screen mx-4 sm:mx-0 sm:w-[586px] md:w-[1000px] flex flex-col items-center">
      <div onClick={props.onclick} className="py-[28px] self-end pr-[28px]">
        <CloseBtn />
      </div>

      <p className="text-[32px] font-bold">Edit bounty</p>
      <p className="text-base text-[#999] pt-4 pb-12 text-center px-4 ">
        Edit your bounty{" "}
      </p>

      <form className="w-full px-4 sm:px-12 md:px-28 text-[#999] text-sm flex flex-col gap-[15px] pb-12 ">
        <InputField
          tag="Title"
          type={"text"}
          placeholder={"Type bounty name here"}
        />

        <div className="w-full flex flex-col md:flex-row justify-between ">
          <InputField
            tag="Repo Link"
            type={"text"}
            placeholder={"Paste repo link here"}
            style={"w-full md:w-[250px]  lg:w-[370px]"}
          />
          <InputField
            tag="Amount"
            type={"text"}
            placeholder={"Bounty Amount in token"}
            style={"w-full md:w-[250px]  lg:w-[370px] "}
          />
        </div>

        <div className=" flex flex-col md:flex-row justify-between ">
          <InputField
            tag="Start Date"
            type={"date"}
            placeholder={""}
            style={"w-full md:w-[250px] lg:w-[370px]"}
          />
          <InputField
            tag="End Date"
            type={"date"}
            placeholder={""}
            style={"w-full md:w-[250px] lg:w-[370px]"}
          />
        </div>

        <TextArea tag="Description" placeholder="Detail About the Bounty" />
      </form>

      <div className="w-full px-3 sm:px-8 md:px-24 flex items-center justify-center pb-20 ">
        <button className="buttonLinearBackground w-full flex items-center justify-center py-3 gap-5 sm:gap-4 text-[16px] font-bold rounded-lg">
          <p>Confirm</p>
          <ArrowRightDiagonalBtn />
        </button>
      </div>
    </div>
  );
};

export default EditBounty;
