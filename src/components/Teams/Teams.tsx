import { profileImage } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TeamsNavbar from "./TeamsNavbar";
import TeamTable from "./TeamTable";
Image;

type Props = {};

const Teams = (props: Props) => {
  return (
    <div className=" bg-black text-white min-h-screen p-6">
      <div className="user-image-container absolute top-4 right-4">
      <Link href="/">
            <Image
              src={profileImage}
              alt="profileImage"
              width={50}
              className="rounded-full"
            />
      </Link>
       
      </div>
      <TeamsNavbar/>
      <TeamTable/>
    </div>
  );
};

export default Teams;
