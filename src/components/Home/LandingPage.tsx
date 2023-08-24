import HeroBanner from "./HeroBanner";
import Partners from "./Partners";
import Features from "./Features";
import BountyBanner from "./BountyBanner";
import HowItWorks from "./HowItWorks";
import Roadmap from "./Roadmap";

type Props = {};

const LandingPage = (props: Props) => {

  return (
    <>
     <HeroBanner/>
     <Partners/>
     <Features/>
     <BountyBanner/>
     <HowItWorks/>
     <Roadmap/>
    </>
  );
};

export default LandingPage;
