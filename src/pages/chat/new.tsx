import React from "react";

const New = () => {
  return (
    <div className="flex">
      <main className="hidden lg:flex w-[320px] h-screen fixed bg-black">
        Sidebar fixed here
      </main>
      <main className="w-[100%] lg:w-[84%] left:0 lg:left-[320px] h-screen fixed bg-green-300">
        {/* <div className="flex flex-col gap-{50px} overflow-y-auto">
          <p>Sidebar</p>
          <p>Sidebar</p>
          <p>Sidebar</p>
          <p>Sidebar</p>
          <p>Sidebar</p>
          <p>Sidebar</p>
          <p>Sidebar</p>
          <p>Sidebar</p>
          <p>Sidebar</p>
          <p>Sidebar</p>
          <p>Sidebar</p>
          <p>Sidebar</p>
          <p>Sidebar</p>
          <p>Sidebar</p>
          <p>Sidebar</p>
          <p>Sidebar</p>
          <p>Sidebar</p>
          <p>Sidebar</p>
        </div> */}
        <section className="h-[13%] pr-5 bg-red-300">
          <h1 className="w-auto bg-gray-600 h-[60%]">Top bars</h1>
        </section>
        <section className="h-[87%] bg-blue-200 ">Others</section>
      </main>
    </div>
  );
};

export default New;
