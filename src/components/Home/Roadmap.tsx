import { roadmap } from "@/assets";
import Image from "next/image";

const Roadmap = () => {
    return ( 
        <div id="roadmap" className="flex justify-around lg:flex-row xl:flex-row md:flex-row flex-col mx-16">
            <Image className="" src={roadmap}  alt="bounty banner"/>
        </div> 
    );
}
 
export default Roadmap;