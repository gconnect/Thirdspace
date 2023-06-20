import { gmailLogo, success } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import SignUpForm from "./SignUpForm";
import { MdOutlineCancel } from "react-icons/md";

type Props = {
  isVisible: boolean;
  onClose: boolean | void | string | any;
  //   children: React.ReactNode;
};

const SignUpModal = ({ isVisible, onClose }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-[#05050533] bg-opacity-25 backdrop-blur-sm  flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[704px] h-[650px] bg-[#0F0F0F] flex flex-col relative ">
        <div className=" p-2 rounded">
          <button
            className="text-white text-2xl absolute top-8 right-10   "
            onClick={() => onClose()}
          >
            <MdOutlineCancel className="w-6 h-6" />
          </button>

          <div className="flex flex-col mt-5 mx-[48px]">
            <h2 className="text-white font-bold text-4xl text-center font-nexa">
              Sign Up
            </h2>

            <button className=" font-nexa h-[50px] mt-10 flex flex-row gap-4 items-center justify-center bg-[#141414] ">
              <Image src={gmailLogo} alt="gmailLogo" width={40} />
              <span className="text-2xl"> Gmail</span>
            </button>

            <p className="mt-[24px] mx-auto items-center justify-center text-[#999999]">
              Or
            </p>

            <div className="mt-6">
              <SignUpForm />
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;

// Hint: Modal NOT Used
