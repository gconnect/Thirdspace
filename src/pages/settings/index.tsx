import AccountSettingsModal, {
  SettingsInputField,
} from "@/components/Settings/AccountSettingsModal";
import SidebarDesktop from "@/components/Sidebar/desktop";
import { CloseBtn, LogoutBtn } from "@/components/shared";
import React, { useState } from "react";

const SettingComponent = () => {
  const [settings, setSettings] = useState(false);
  const displaySettingsModal = () => {
    return setSettings(!settings);
  };
  return (
    <main className="w-full h-screen px-5 md:px-10  xl:px-16 ">
      <div onClick={displaySettingsModal}>
        <button className="w-full flex items-center justify-center py-3 gap-5 sm:gap-4 text-[16px] font-bold rounded-lg  border-[1px] border-buttonGradient">
          Account Settings
        </button>
      </div>

      {settings && (
        <div className="bg-[#191919] fixed z-10 left-0 top-0 w-screen h-screen overflow-y-auto py-16">
          <div className="flex margin-auto items-center justify-center">
            <AccountSettingsModal onclick={displaySettingsModal} />
          </div>
        </div>
      )}

      <section className="flex items-center justify-center mt-10">
        <div className="bg-[#0F0F0F] rounded-md h-auto w-screen mx-4 sm:mx-0 sm:w-[586px] md:w-[700px] flex flex-col items-center">
          <div
            onClick={() => setSettings(false)}
            className="py-[28px] self-end pr-[28px]"
          >
            <CloseBtn />
          </div>

          <p className="text-[32px] font-bold pb-10">Account Settings</p>

          <form className="w-full px-4 sm:px-12 md:px-28 text-[#999] text-sm flex flex-col gap-[15px] pb-12 ">
            <SettingsInputField
              tag="FirstName"
              type={"text"}
              placeholder={"Qibigs Westbite"}
            />

            <SettingsInputField
              tag="Email"
              type={"email"}
              placeholder={"quibigs@gmail.com"}
            />

            <SettingsInputField
              tag="Password"
              type={"password"}
              placeholder={"quibigs@gmail.com"}
            />

            <SettingsInputField
              tag="Wallet Address"
              type={"text"}
              placeholder={"sj23hihiweihei.....498497h2s9"}
            />
          </form>

          <div className="w-full px-5 sm:px-12 md:px-28 flex items-center justify-between pb-20 ">
            <button className="buttonLinearBackground w-auto px-7 sm:px-16 flex items-center justify-center py-3 gap-2 text-[16px] font-bold rounded-full">
              <LogoutBtn />
              <p>Logout</p>
            </button>

            <button className="buttonLinearBackground w-auto px-7 sm:px-16 flex items-center justify-center py-3 gap-5 sm:gap-4 text-[16px] font-bold rounded-full">
              <p>Save</p>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

const AccountSettings = () => {
  return (
    <SidebarDesktop>
      <SettingComponent />
    </SidebarDesktop>
  );
};

export default AccountSettings;
