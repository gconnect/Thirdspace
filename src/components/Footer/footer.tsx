import { logo } from "@/assets";
import Image from "next/image";

const Footer = () => {
    return(
        <div className="footerbg px-16 py-8  flex justify-between">
            <Image className="" src={logo}  alt="bounty banner"/>
            <p className="text-white">© 2023 Third space. All rights reserved.</p>
        </div>
    )
}

export default Footer