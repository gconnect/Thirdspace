import { partner } from "@/assets";
import Image from "next/image";
import { partnerItems } from "./PartnerItem";

const Partners = () => {
    return ( 
    <div id="partners" className="bg-stone-800 mt-24 lg:mt-60 xl:mt-60 md:mt-60 p-36"
    >
        <h3 className="text-white text-center font-bold mb-4">Our Partners</h3>
        <div className="flex justify-center items-center">
            {
                partnerItems.map((item, index) => 
                <div key={index} className="m-4">
                    <Image  className="" src={require(`../../../assets/partners/${item.icon}.png`)} width={150} alt={item.icon}/>
                </div>)
            }
        </div>
    </div> 
    );
}
 
export default Partners;