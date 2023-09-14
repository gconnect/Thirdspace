import { useState } from "react";
import ViewTask from "@/components/kanban/viewTask";
import Image from "next/image";

export const Hamburger = () => {
  return (
    <svg
      width="18"
      height="12"
      fill="none"
      viewBox="0 0 18 12"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[22px] h-[22px] sm:w-[28px] sm:h-[28px] "
    >
      <path
        fill="#999999"
        d="M16.6801 4.8H1.3201C0.657698 4.8 0.600098 5.3364 0.600098 6C0.600098 6.6636 0.657698 7.2 1.3201 7.2H16.6801C17.3425 7.2 17.4001 6.6636 17.4001 6C17.4001 5.3364 17.3425 4.8 16.6801 4.8ZM16.6801 9.6H1.3201C0.657698 9.6 0.600098 10.1364 0.600098 10.8C0.600098 11.4636 0.657698 12 1.3201 12H16.6801C17.3425 12 17.4001 11.4636 17.4001 10.8C17.4001 10.1364 17.3425 9.6 16.6801 9.6ZM1.3201 2.4H16.6801C17.3425 2.4 17.4001 1.8636 17.4001 1.2C17.4001 0.5364 17.3425 0 16.6801 0H1.3201C0.657698 0 0.600098 0.5364 0.600098 1.2C0.600098 1.8636 0.657698 2.4 1.3201 2.4Z"
      />
    </svg>
  );
};

export const KanbanSearch = (props: { width: string }) => {
  const SearchSVG = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M18.4444 20L15.4444 17C14.8889 17.4444 14.25 17.7963 13.5278 18.0556C12.8056 18.3148 12.037 18.4444 11.2222 18.4444C9.2037 18.4444 7.49556 17.7452 6.09778 16.3467C4.7 14.9481 4.00074 13.24 4 11.2222C4 9.2037 4.69926 7.49556 6.09778 6.09778C7.4963 4.7 9.20444 4.00074 11.2222 4C13.2407 4 14.9489 4.69926 16.3467 6.09778C17.7444 7.4963 18.4437 9.20444 18.4444 11.2222C18.4444 12.037 18.3148 12.8056 18.0556 13.5278C17.7963 14.25 17.4444 14.8889 17 15.4444L20 18.4444L18.4444 20ZM11.2222 16.2222C12.6111 16.2222 13.7919 15.7359 14.7644 14.7633C15.737 13.7907 16.223 12.6104 16.2222 11.2222C16.2222 9.83333 15.7359 8.65259 14.7633 7.68C13.7907 6.70741 12.6104 6.22148 11.2222 6.22222C9.83333 6.22222 8.65259 6.70852 7.68 7.68111C6.70741 8.6537 6.22148 9.83407 6.22222 11.2222C6.22222 12.6111 6.70852 13.7919 7.68111 14.7644C8.6537 15.737 9.83407 16.223 11.2222 16.2222Z"
          fill="#999999"
        />
      </svg>
    );
  };

  return (
    <div
      className={`${props.width} flex items-center rounded-full h-[45px] px-6 py-2 gap-2 text-[#999999] bg-zinc-900`}
    >
      <SearchSVG />
      <input
        type="search"
        placeholder="Search"
        className="bg-inherit focus:outline-none"
      />
    </div>
  );
};

export const FilterIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.0001 19.88C15.0401 20.18 14.9401 20.5 14.7101 20.71C14.6176 20.8027 14.5077 20.8762 14.3868 20.9264C14.2658 20.9766 14.1361 21.0024 14.0051 21.0024C13.8742 21.0024 13.7445 20.9766 13.6235 20.9264C13.5025 20.8762 13.3926 20.8027 13.3001 20.71L9.29013 16.7C9.18107 16.5934 9.09814 16.463 9.04783 16.319C8.99752 16.175 8.9812 16.0213 9.00013 15.87V10.75L4.21013 4.62C4.04774 4.41153 3.97446 4.14726 4.00632 3.88493C4.03817 3.6226 4.17257 3.38355 4.38013 3.22C4.57013 3.08 4.78013 3 5.00013 3H19.0001C19.2201 3 19.4301 3.08 19.6201 3.22C19.8277 3.38355 19.9621 3.6226 19.9939 3.88493C20.0258 4.14726 19.9525 4.41153 19.7901 4.62L15.0001 10.75V19.88ZM7.04013 5L11.0001 10.06V15.58L13.0001 17.58V10.05L16.9601 5H7.04013Z"
        fill="#999999"
      />
    </svg>
  );
};

export const ArrowdownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M7 10L12 15L17 10H7Z" fill="#999999" />
    </svg>
  );
};

export const ThreeDotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M3.75 11.875C3.25272 11.875 2.77581 11.6775 2.42417 11.3258C2.07254 10.9742 1.875 10.4973 1.875 10C1.875 9.50272 2.07254 9.02581 2.42417 8.67417C2.77581 8.32254 3.25272 8.125 3.75 8.125C4.24728 8.125 4.72419 8.32254 5.07583 8.67417C5.42746 9.02581 5.625 9.50272 5.625 10C5.625 10.4973 5.42746 10.9742 5.07583 11.3258C4.72419 11.6775 4.24728 11.875 3.75 11.875ZM10 11.875C9.50272 11.875 9.02581 11.6775 8.67417 11.3258C8.32254 10.9742 8.125 10.4973 8.125 10C8.125 9.50272 8.32254 9.02581 8.67417 8.67417C9.02581 8.32254 9.50272 8.125 10 8.125C10.4973 8.125 10.9742 8.32254 11.3258 8.67417C11.6775 9.02581 11.875 9.50272 11.875 10C11.875 10.4973 11.6775 10.9742 11.3258 11.3258C10.9742 11.6775 10.4973 11.875 10 11.875ZM16.25 11.875C15.7527 11.875 15.2758 11.6775 14.9242 11.3258C14.5725 10.9742 14.375 10.4973 14.375 10C14.375 9.50272 14.5725 9.02581 14.9242 8.67417C15.2758 8.32254 15.7527 8.125 16.25 8.125C16.7473 8.125 17.2242 8.32254 17.5758 8.67417C17.9275 9.02581 18.125 9.50272 18.125 10C18.125 10.4973 17.9275 10.9742 17.5758 11.3258C17.2242 11.6775 16.7473 11.875 16.25 11.875Z"
        fill="white"
      />
    </svg>
  );
};

export const VerticalThreeDotsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M14.3684 8C15.473 8 16.3684 7.10457 16.3684 6C16.3684 4.89543 15.473 4 14.3684 4C13.2638 4 12.3684 4.89543 12.3684 6C12.3684 7.10457 13.2638 8 14.3684 8Z"
        fill="white"
      />
      <path
        d="M14.3684 14C15.473 14 16.3684 13.1046 16.3684 12C16.3684 10.8954 15.473 10 14.3684 10C13.2638 10 12.3684 10.8954 12.3684 12C12.3684 13.1046 13.2638 14 14.3684 14Z"
        fill="white"
      />
      <path
        d="M14.3684 20C15.473 20 16.3684 19.1046 16.3684 18C16.3684 16.8954 15.473 16 14.3684 16C13.2638 16 12.3684 16.8954 12.3684 18C12.3684 19.1046 13.2638 20 14.3684 20Z"
        fill="white"
      />
    </svg>
  );
};

export const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z"
        fill="white"
      />
    </svg>
  );
};

export const CloseBtn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_1112_758)">
        <path
          d="M3.516 20.484C2.36988 19.377 1.45569 18.0529 0.826781 16.5889C0.197873 15.1248 -0.133162 13.5502 -0.147008 11.9568C-0.160854 10.3635 0.142767 8.78331 0.746137 7.30855C1.34951 5.83379 2.24055 4.49397 3.36726 3.36726C4.49397 2.24055 5.83379 1.34951 7.30855 0.746137C8.78331 0.142767 10.3635 -0.160854 11.9568 -0.147008C13.5502 -0.133162 15.1248 0.197873 16.5889 0.826781C18.0529 1.45569 19.377 2.36988 20.484 3.516C22.6699 5.77922 23.8794 8.81045 23.8521 11.9568C23.8247 15.1032 22.5627 18.1129 20.3378 20.3378C18.1129 22.5627 15.1032 23.8247 11.9568 23.8521C8.81045 23.8794 5.77922 22.6699 3.516 20.484ZM5.208 18.792C7.00935 20.5933 9.4525 21.6053 12 21.6053C14.5475 21.6053 16.9906 20.5933 18.792 18.792C20.5933 16.9906 21.6053 14.5475 21.6053 12C21.6053 9.4525 20.5933 7.00935 18.792 5.208C16.9906 3.40665 14.5475 2.39466 12 2.39466C9.4525 2.39466 7.00935 3.40665 5.208 5.208C3.40665 7.00935 2.39466 9.4525 2.39466 12C2.39466 14.5475 3.40665 16.9906 5.208 18.792ZM17.088 8.604L13.692 12L17.088 15.396L15.396 17.088L12 13.692L8.604 17.088L6.912 15.396L10.308 12L6.912 8.604L8.604 6.912L12 10.308L15.396 6.912L17.088 8.604Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1112_758">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CreateBtn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M1.29231 12L0 10.7077L8.86154 1.84615H0.923077V0H12V11.0769H10.1538V3.13846L1.29231 12Z"
        fill="white"
      />
    </svg>
  );
};

export const TaskCard = (props: { borderColor: string }) => {
  const [viewTask, setViewTask] = useState(false);
  const displayViewTaskModal = () => {
    return setViewTask(!viewTask);
  };

  return (
    <>
      <div
        onClick={displayViewTaskModal}
        className={`${props.borderColor} max-w-[320px] flex flex-col px-[14px] py-[34px] border-[1px] rounded-md`}
      >
        <div className="flex flex-row justify-between">
          <p>Armored Core</p>
          <ThreeDotIcon />
        </div>
        <p className="pt-[28px] pb-[55px]">
          Acronis looks forward to working with the security community to find
          security vulnerabilities in
        </p>
        <div className="flex flex-row items-center justify-between ">
          <div className="flex flex-row gap-3">
            <Image
              src="/images/user-avatar.png"
              alt="avatar"
              className="w-[28px] h-[28px] rounded-full"
              width={28}
              height={28}
            />
            <p>Jun 12</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <div className="flex flex-row gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M11.6668 1.66699H5.00016C4.55814 1.66699 4.13421 1.84259 3.82165 2.15515C3.50909 2.46771 3.3335 2.89163 3.3335 3.33366V16.667C3.3335 17.109 3.50909 17.5329 3.82165 17.8455C4.13421 18.1581 4.55814 18.3337 5.00016 18.3337H15.0002C15.4422 18.3337 15.8661 18.1581 16.1787 17.8455C16.4912 17.5329 16.6668 17.109 16.6668 16.667V6.66699L11.6668 1.66699ZM15.0002 16.667H5.00016V3.33366H10.8335V7.50033H15.0002V16.667Z"
                  fill="white"
                />
              </svg>
              <p>4</p>
            </div>
            <div className="flex flex-row gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.99984 2.5C5.4165 2.5 1.6665 5.48333 1.6665 9.16667C1.68743 10.0522 1.90369 10.9223 2.29985 11.7146C2.696 12.5069 3.26226 13.2019 3.95817 13.75C3.95817 14.25 3.60817 15.5583 1.6665 17.5C3.6415 17.4083 5.53317 16.6667 7.05817 15.4167C8.00817 15.6917 9.00817 15.8333 9.99984 15.8333C14.5832 15.8333 18.3332 12.85 18.3332 9.16667C18.3332 5.48333 14.5832 2.5 9.99984 2.5ZM9.99984 14.1667C6.3165 14.1667 3.33317 11.925 3.33317 9.16667C3.33317 6.40833 6.3165 4.16667 9.99984 4.16667C13.6832 4.16667 16.6665 6.40833 16.6665 9.16667C16.6665 11.925 13.6832 14.1667 9.99984 14.1667Z"
                  fill="white"
                />
              </svg>
              <p>6</p>
            </div>{" "}
          </div>
        </div>
      </div>
      {viewTask && (
        <div className="bg-[#191919] overflow-auto fixed z-10 left-0 top-0 w-screen h-screen items-center justify-center">
          <div className="flex py-20 items-center justify-center">
            <ViewTask onclick={displayViewTaskModal} />
          </div>
        </div>
      )}
    </>
  );
};
