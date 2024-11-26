import thredPart from "../../public/thired.json"
import fourth from "../../public/fourth.json"
import { useAuth } from "../auth/ContextApi"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
export const NinePart = () =>{
    const {handleleft,handleRight,scrollref} = useAuth()
    return(
        <>
         <section className="SevethPart">
            <h1>Minimum 50% off | Home, kitchen & outdoors</h1>
            <p>See all Offers</p>
            <div>
            {
                thredPart.map((curr,index)=>{
                 return(
                    <main key={index}>
                        <img src={curr.images} alt="" />
                    </main>
                 )   
                })
            }
            </div>
        </section>
        <section className="SevethPart">
            <h1>Minimum 50% off | Home, kitchen & outdoors</h1>
            <p>See all Offers</p>
            <div>
            {
                thredPart.map((curr,index)=>{
                 return(
                    <main key={index}>
                        <img src={curr.images} alt="" />
                    </main>
                 )   
                })
            }
            </div>
        </section>
        <section className="sixitem">
    <h2>Up to 70% off | Appliances & more from stores near you</h2>
     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Local/Jupiter24/Qc/PbvB/cloths-1x._SY116_CB544028412_.jpg" alt=""/>
     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Local/Jupiter24/Qc/PbvB/furniture--1X._SY116_CB544028412_.jpg" alt=""/>
     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Local/Jupiter24/Qc/PbvB/kitchen-storage-1x._SY116_CB544028412_.jpg" alt=""/>
     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Local/Jupiter24/Qc/PbvB/LA-1X._SY116_CB544028412_.jpg" alt="" />
     <p>see all More</p>
    </section>
    <section className="sixitem2">
    <h2>Deals on top smartphone brands</h2>
     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/Jupiter/2024/Phase3/MSO/PC/01_186x116._SY116_CB545024590_.jpg" alt=""/>
     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/Jupiter/2024/Phase3/MSO/PC/01_186x116_02._SY116_CB545024590_.jpg" alt=""/>
     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/Jupiter/2024/Phase3/MSO/PC/04_186x116._SY116_CB545024590_.jpg" alt=""/>
     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/Jupiter/2024/Phase3/MSO/PC/03_186x116._SY116_CB545024590_.jpg" alt="" />
     <p>see all More</p>
    </section>
    <section className="sixitem3">
    <h2>Up to 75% off | Amazon Renewed</h2>
     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/certified_refurbished/anjaga/RenewedMarketing2024/Jupiter24/JupiterGW/Phase3/Phase3B/1_PC_QC_1x._SY116_CB543850944_.jpg" alt=""/>
     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/certified_refurbished/anjaga/RenewedMarketing2024/Jupiter24/JupiterGW/Phase3/Phase3B/2_PC_QC_1x._SY116_CB543852804_.jpg" alt=""/>
     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/certified_refurbished/anjaga/RenewedMarketing2024/Jupiter24/JupiterGW/Phase3/Phase3B/3_PC_QC_1x._SY116_CB543850944_.jpg" alt=""/>
     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/certified_refurbished/anjaga/RenewedMarketing2024/Jupiter24/JupiterGW/Phase3/Phase3B/4_PC_QC_1x._SY116_CB543852867_.jpg" alt="" />
     <p>see all More</p>
    </section>
        <section className="SevethPart2">
<h1>Up to 40% off | Deals on smartphones</h1>
<p>See all Offers</p>
<div className="FaChevronLeft5" onClick={handleleft}><FaChevronLeft/></div>
<div className="FaChevronRight5" onClick={handleRight}><FaChevronRight/></div>
  <div ref={scrollref}>
   {
    fourth.map((curr,index)=>{
    return(
        <main key={index}>
            <img src={curr.images} alt="" />
        </main>
    )
    })
   }
  </div>
        </section>
        </>
    )
}