import React from "react";
import {
  FilterIcon,
  KanbanSearch,
  ArrowdownIcon,
} from "@/components/kanban/shared";
import TaskPanel from "@/components/kanban/task-panel";
import KanbanDashboard from "@/components/kanban/dashboard";
import KanbanSidebar from "../../components/Sidebar/kanban/desktop";
import KanbanSidebarMobile from "@/components/Sidebar/kanban/mobile";

const KanbanComponent = () => {
  return (
    <main className="w-full h-auto bg-black-500">
      <section className="flex items-center gap-5 sm:gap-10">
        <KanbanSidebarMobile />
        <KanbanDashboard />
      </section>

      <section className="py-5">
        <div className="flex xl:hidden">
          <KanbanSearch width="w-full" />
        </div>
      </section>

      {/* filter */}
      <section className="py-5 flex gap-5 items-center text-[#999999] font-medium text-[16px] sm:text-[20px] ">
        <div className="flex gap-1 sm:gap-2 items-center">
          <FilterIcon />
          Filter
        </div>
        <div className="flex gap-1 sm:gap-2 pl-2 sm:pl-5 pr-1 sm:pr-3 py-2 border-[1px] border-[#999999] items-center">
          Assignee <ArrowdownIcon />
        </div>
        <div className="flex gap-1 sm:gap-2 pl-2 sm:pl-5 pr-1 sm:pr-3 py-2 border-[1px] border-[#999999] items-center">
          Due date
          <ArrowdownIcon />
        </div>
      </section>

      {/* taks cards management */}
      <TaskPanel />
    </main>
  );
};

const Index = () => {
  return (
    <div>
      <KanbanSidebar>
        <KanbanComponent />
      </KanbanSidebar>
    </div>
  );
};

export default Index;
