import { bountyBanner } from "@/assets";
import Image from "next/image";

const BountyBanner = () => {
    return ( 
        <div id="bounties" className="flex justify-around lg:flex-row xl:flex-row md:flex-row flex-col mt-24 mx-16">
            <Image className="" src={bountyBanner}  alt="bounty banner"/>
            <p className="mt-24 w-2/4 text-white">
            Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
              Curabitur tempor quis eros tempus lacinia. Nam 
            </p>
        </div> 
    );
}
 
export default BountyBanner;