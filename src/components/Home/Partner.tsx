import { partner } from "@/assets";
import Image from "next/image";
 
const Partners = () => {
    return ( 
    <div id="partners" className=" mt-24 lg:mt-60 xl:mt-60 md:mt-60">
        <Image src={partner} alt="partners"/>
    </div> 
    );
}
 
export default Partners;