import "./HomePage.css";
import Navbar from "../../components/NavbarCom/NavbarCom";
import HeroSliderCom from "../../components/MainSlideCom/HeroSliderCom";
import TopCategories from "../../components/TopCategories/TopCategories";
import AllCategory from "../../components/AllCategory/AllCategory";
import ExploreOurProducts from "../../components/ExploreOurProducts/ExploreOurProducts";
import DiscountSaleArea from "../../components/DiscountSaleArea/DiscountSaleArea";
import OurServicesCom from "../../components/OurServices/Ourservices";
import OurPartner from "../../components/OurPartner/OurPartner";
import MessageSection from "../../components/MessageSection/MessageSection";
import FooterArea from "../../components/FooterArea/FooterArea";



const HomePage = () => {
    return(
        <div className="home-bg">
          <Navbar/>
          <HeroSliderCom/>
          <TopCategories/>
          <ExploreOurProducts/>
          <AllCategory/>
          <DiscountSaleArea/>
          <OurServicesCom/>
          <OurPartner/>
          <MessageSection/>
          <FooterArea/>
        </div>
    );
};

export default HomePage;