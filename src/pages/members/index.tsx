import Members from "@/components/Members/Members";
import SidebarDesktop from "@/components/Sidebar/desktop";
import React from "react";

type Props = {};

const MembersPage = (props: Props) => {
  return (
    <SidebarDesktop>
      <Members />
    </SidebarDesktop>
  );
};

export default MembersPage;
