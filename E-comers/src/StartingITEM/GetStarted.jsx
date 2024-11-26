import { useState } from "react";
import { FaCircleUser, FaMessage, FaLocationDot } from "react-icons/fa6";
import { SiSellfy } from "react-icons/si";
import { FcAbout } from "react-icons/fc";
import { FaHome,FaSearch } from "react-icons/fa";
import { SecoundPart } from "./SecoundPart";
import { NavLink } from "react-router-dom";

export const GetStarted = () =>{
const[move,setmove] = useState(false)  

const handlemove = () =>{
setmove(!move)
}

 return(
     <header >
    <section className={`homeSection ${move ? "move2":"noall"}`}  >
     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter24/J24_P3B_GW_PC_EventHero_NTA_2x_V2._CB543524088_.jpg" className="img1" /> 
     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/sthaneka/Alphonsa/GW/Hero/Phase3B/Urec_2x_bs._CB543453867_.jpg" className="img2"  />   
     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/PC_Hero_3000x1200_Lifestyle_13b._CB543524210_.jpg" className="img3"  />  
     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/HiddenGems/Jup24/BOB/D156384865_3A_3B_PC_Hero_3000x1200_1._CB543545309_.jpg" className="img4"  />  
     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/Baby2024/HeroP3b/3B_PC_Hero_3000x1200_01._CB543525778_.jpg" className="img5"  /> 
     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Sports/September/Jupiter/Mainevent/Phase3/GW/Hero/3B/3b_3000_unrec._CB543170549_.png" className={`img6`} />
     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Madhav/jupiter24/Iphone/P3/41749/3B/3A_3B_PC_Hero_3000x1200_3._CB543505534_.jpg" />

    </section >

    <section className={`HomeMenu2 ${move ? "move1":"no"}`} onMouseLeave={handlemove} >
      <div onMouseEnter={handlemove} >
        <ul >
          <li><FaHome/> <span>Home</span></li>
         <NavLink to={'/user'}> <li><FaCircleUser/> <span>User</span></li> </NavLink>  
            <li><FaSearch/> <span>Search</span></li>
            <li><SiSellfy/> <span>Sell</span></li>
          <NavLink to={'/message'}> <li><FaMessage/> <span>Message</span></li></NavLink> 
            <li><FaLocationDot/> <span>Location</span></li>
            <li><FcAbout/> <span>About</span></li>
        </ul>
      </div>
    </section>

    <section>
    <div className={`singleDiv ${move ? "move3":"no2"}`}>
      <h3>New deals added everyday</h3>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img24/Jupiter24/Phase3/J24_GW_PC_CC_SAD_1x._SY304_CB545060597_.jpg" alt=""  />
     <p>Explore now</p>
     </div>
    </section>
    <section>
    <div className={`singleDiv3 ${move ? "move3":"no2"}`}>
      <h3>New deals added everyday</h3>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Camera/Changes/p2/PC_CC_758x608_CEPC_50._SY304_CB545069641_.jpg" alt=""  />
     <p>Explore now</p>
     </div>
    </section>
    
    <section >
    <div className={`singleDiv4 ${move ? "move3":"no2"}`}>
      <h3>New deals added everyday</h3>
      <img src="https://rukminim1.flixcart.com/fk-p-flap/450/280/image/3ed1d18b8d41e595.jpeg?q=20" alt=""  />
     <p>Explore now</p>
     </div>
    </section>
    <section>
    <div className={`singleDiv6 ${move ? "move3":"no2"}`}>
      <h3>New deals added everyday</h3>
      <img src="https://rukminim1.flixcart.com/fk-p-flap/450/280/image/3ed1d18b8d41e595.jpeg?q=20" alt=""  />
     <p>Explore now</p>
     </div>
    </section>

<SecoundPart move={move}/>


   </header>
 )
}